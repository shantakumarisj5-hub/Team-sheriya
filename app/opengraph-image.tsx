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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#170604",
          color: "#fff8f2",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            backgroundColor: "#8e300e",
            opacity: 0.3,
            top: "-180px",
            right: "-100px",
          }}
        />

        {/* Secondary glow */}
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            backgroundColor: "#ca93ff",
            opacity: 0.08,
            bottom: "-120px",
            left: "500px",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            fontSize: "30px",
            fontWeight: 800,
            position: "relative",
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
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#ffb16b",
              fontSize: "20px",
              letterSpacing: "3px",
            }}
          >
            DIGITAL PRODUCTS WITH MOMENTUM
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "20px",
              maxWidth: "950px",
              fontSize: "82px",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-4px",
            }}
          >
            Build the thing your business has been waiting for.
          </div>
        </div>

        {/* Services */}
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#dec9be",
            position: "relative",
          }}
        >
          Websites · Web products · Product design · Growth content
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}