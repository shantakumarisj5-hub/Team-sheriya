import { ImageResponse } from "next/og";

export const alt = "Team Sheriya — digital products with momentum";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: "#170604",
          color: "#fff8f2",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            backgroundColor: "#8e300e",
            opacity: 0.35,
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 30,
            fontWeight: 800,
            display: "flex",
          }}
        >
          team
          <span style={{ color: "#ff6827" }}>sheriya</span>
          <span style={{ color: "#ca93ff" }}>•</span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#ffb16b",
              fontSize: 20,
              letterSpacing: 3,
            }}
          >
            DIGITAL PRODUCTS WITH MOMENTUM
          </div>

          <div
            style={{
              marginTop: 20,
              maxWidth: 950,
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 0.94,
              letterSpacing: -5,
            }}
          >
            Build the thing your business has been waiting for.
          </div>
        </div>

        {/* Services */}
        <div
          style={{
            fontSize: 24,
            color: "#dec9be",
          }}
        >
          Websites · Web products · Product design · Growth content
        </div>
      </div>
    ),
    size
  );
}