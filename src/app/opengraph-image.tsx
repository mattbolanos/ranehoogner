import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rane Hoogner — Baskets, Florals & Design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf6f1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#5c4033",
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 64, color: "#faf6f1", fontWeight: 700 }}>
            R
          </span>
        </div>
        <h1
          style={{
            fontSize: 56,
            color: "#5c4033",
            margin: 0,
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          Rane Hoogner
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "#7a5c4f",
            margin: 0,
            marginTop: 12,
            fontStyle: "italic",
          }}
        >
          The Weaver
        </p>
        <p
          style={{
            fontSize: 22,
            color: "#6b7c5e",
            margin: 0,
            marginTop: 24,
          }}
        >
          Baskets &middot; Florals &middot; Wreaths &middot; Weddings &middot;
          Garden Design
        </p>
        <p
          style={{
            fontSize: 18,
            color: "#7a5c4f",
            margin: 0,
            marginTop: 16,
            fontStyle: "italic",
          }}
        >
          Creating since 1982
        </p>
      </div>
    ),
    { ...size },
  );
}
