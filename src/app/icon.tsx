import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: "#09090B",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F4F4F5",
          borderRadius: 6,
          border: "1px solid #3F3F46",
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        MK
      </div>
    ),
    {
      ...size,
    }
  );
}
