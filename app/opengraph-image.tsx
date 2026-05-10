import { ImageResponse } from "next/og";

export const alt = "Volkswagen Sài Gòn – Đại lý VW chính hãng tại TP.HCM";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "#001e50",
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative ring */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.06)",
            display: "flex",
          }}
        />

        {/* VW Circle Badge */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            border: "3px solid rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "white", fontSize: 42, fontWeight: 700, letterSpacing: -2 }}>
            VW
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            color: "white",
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: -1,
            marginBottom: 12,
            display: "flex",
          }}
        >
          Volkswagen Sài Gòn
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 2,
            background: "rgba(255,255,255,0.4)",
            marginBottom: 16,
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 26,
            fontWeight: 400,
            marginBottom: 40,
            display: "flex",
          }}
        >
          Đại lý VW chính hãng tại TP.HCM
        </div>

        {/* Info pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Lái thử miễn phí", "Hỗ trợ vay 85%", "Giao xe tận nhà"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 999,
                padding: "8px 20px",
                color: "rgba(255,255,255,0.9)",
                fontSize: 18,
                display: "flex",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            color: "rgba(255,255,255,0.35)",
            fontSize: 18,
            display: "flex",
          }}
        >
          volkswagensaigon.vn
        </div>
      </div>
    ),
    size
  );
}
