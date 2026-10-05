"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  ShieldCheck,
  RefreshCw,
  LockKeyhole,
  ArrowRight,
  Smartphone,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const QR_DURATION = 5 * 60;

export default function AdminLoginPage() {
  const [token, setToken] = useState("");
  const [expiresAt, setExpiresAt] = useState<number | null>(null);
  const [pin, setPin] = useState("");
  const [loadingQr, setLoadingQr] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);
  const [error, setError] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(QR_DURATION);

  async function generateQr() {
    try {
      setLoadingQr(true);
      setError("");
      setPin("");

      const response = await fetch("/api/admin/qr", {
        method: "GET",
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to generate QR.");
      }

      setToken(result.token);
      setExpiresAt(result.expiresAt);

      const remaining = Math.max(
        0,
        result.expiresAt - Math.floor(Date.now() / 1000)
      );

      setSecondsLeft(remaining);
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Unable to generate QR code."
      );
    } finally {
      setLoadingQr(false);
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
  const scannedToken = params.get("token");

  if (scannedToken) {
    setToken(scannedToken);
    setLoadingQr(false);
    setError("");

    const parts = scannedToken.split(".");

    if (parts.length === 3) {
      const scannedExpiry = Number(parts[1]);

      if (!Number.isNaN(scannedExpiry)) {
        setExpiresAt(scannedExpiry);

        const remaining = Math.max(
          0,
          scannedExpiry - Math.floor(Date.now() / 1000)
        );

        setSecondsLeft(remaining);
      }
    }

    return;
  }
    generateQr();
  }, []);

  useEffect(() => {
    if (!expiresAt) {
      return;
    }

    const timer = window.setInterval(() => {
      const remaining = Math.max(
        0,
        expiresAt - Math.floor(Date.now() / 1000)
      );

      setSecondsLeft(remaining);

      if (remaining <= 0) {
        window.clearInterval(timer);
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [expiresAt]);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!token) {
      setError("Please generate a QR code first.");
      return;
    }

    if (secondsLeft <= 0) {
      setError("QR code expired. Generate a new one.");
      return;
    }

    if (!/^\d{8}$/.test(pin)) {
      setError("Enter exactly 8 digits.");
      return;
    }

    try {
      setLoggingIn(true);

      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          pin,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Login failed.");
      }

      window.location.href = "/admin/enquiries";
    } catch (reason) {
      setError(
        reason instanceof Error ? reason.message : "Login failed."
      );
    } finally {
      setLoggingIn(false);
    }
  }

  function formatTime(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  const qrUrl =
    typeof window !== "undefined" && token
      ? `${window.location.origin}/admin/login?token=${encodeURIComponent(
          token
        )}`
      : "";

  return (
    <main className="admin-login-page">
      <div className="admin-login-background admin-login-background-one" />
      <div className="admin-login-background admin-login-background-two" />

      <section className="admin-login-card">
        <div className="admin-login-brand">
          <div className="admin-login-logo">
            <ShieldCheck size={22} />
          </div>

          <div>
            <strong>team<span>sheriya</span>•</strong>
            <small>ADMIN PORTAL</small>
          </div>
        </div>

        <div className="admin-login-heading">
          <div className="admin-login-icon">
            <LockKeyhole size={28} />
          </div>

          <h1>Secure Admin Access</h1>

          <p>
            Scan the QR code with your phone, then enter the
            8-digit admin PIN to continue.
          </p>
        </div>

        <div className="admin-qr-container">
          {loadingQr ? (
            <div className="admin-qr-loading">
              <RefreshCw className="admin-spin" size={32} />
              <span>Generating secure QR...</span>
            </div>
          ) : token && secondsLeft > 0 ? (
            <>
              <div className="admin-qr">
                <QRCodeSVG
                  value={qrUrl}
                  size={220}
                  level="H"
                  includeMargin
                />
              </div>

              <div className="admin-qr-timer">
                <Clock3 size={15} />

                <span>
                  QR expires in{" "}
                  <strong>{formatTime(secondsLeft)}</strong>
                </span>
              </div>
            </>
          ) : (
            <div className="admin-qr-expired">
              <Clock3 size={34} />
              <strong>QR expired</strong>
              <span>Generate a new secure QR code.</span>
            </div>
          )}
        </div>

        <div className="admin-scan-hint">
          <Smartphone size={19} />

          <div>
            <strong>Scan with your phone</strong>
            <span>
              Point your camera at the QR code to open the secure
              admin login.
            </span>
          </div>
        </div>

        <div className="admin-divider">
          <span>ADMIN PIN</span>
        </div>

        <form onSubmit={handleLogin} className="admin-login-form">
          <label htmlFor="admin-pin">
            8-digit PIN
          </label>

          <input
            id="admin-pin"
            type="password"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={8}
            minLength={8}
            pattern="[0-9]{8}"
            placeholder="••••••••"
            value={pin}
            onChange={(event) =>
              setPin(event.target.value.replace(/\D/g, ""))
            }
          />

          <div className="admin-pin-count">
            {pin.length}/8 digits
          </div>

          {error && (
            <div className="admin-login-error">
              <AlertCircle size={17} />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={
              loggingIn ||
              loadingQr ||
              !token ||
              secondsLeft <= 0
            }
            className="admin-login-button"
          >
            {loggingIn ? (
              <>
                <RefreshCw className="admin-spin" size={18} />
                Verifying...
              </>
            ) : (
              <>
                Enter Admin
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {secondsLeft <= 0 && (
          <button
            type="button"
            onClick={generateQr}
            className="admin-refresh-button"
          >
            <RefreshCw size={17} />
            Generate New QR
          </button>
        )}

        <div className="admin-security-note">
          <CheckCircle2 size={15} />
          <span>
            Protected admin session · QR expires automatically
          </span>
        </div>
      </section>
    </main>
  );
}