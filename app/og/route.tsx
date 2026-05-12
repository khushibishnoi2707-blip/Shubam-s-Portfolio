import { ImageResponse } from "next/og";
import { profile } from "@/data";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000",
          color: "#f5fff9",
          padding: "72px",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            color: "#31f6d4",
            fontSize: "28px"
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#31f6d4"
            }}
          />
          AI/ML Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "102px", lineHeight: 0.86, fontWeight: 900, letterSpacing: "-6px" }}>
            {profile.name}
          </div>
          <div style={{ maxWidth: "860px", fontSize: "34px", lineHeight: 1.25, color: "#9caea8" }}>
            AI/ML, LLM engineering, RAG systems, data analytics, and product-grade interfaces.
          </div>
        </div>
        <div style={{ fontSize: "26px", color: "#31f6d4" }}>Open to work</div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
