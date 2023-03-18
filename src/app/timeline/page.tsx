"use client";

import Snippet from "./snippet/page";
import Welcome from "./welcome/page";

export default function Timeline() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Welcome />
      <Snippet />
    </div>
  );
}
