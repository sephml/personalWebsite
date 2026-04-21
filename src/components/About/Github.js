import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }} className="animate-fade-in">
      <div>
        <div className="section-label" style={{ marginBottom: "10px" }}>Activity</div>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#f0f0f0",
            margin: 0,
          }}
        >
          Days I <span className="gradient-text">Code</span>
        </h2>
      </div>

      <div
        style={{
          background: "#0f0f0f",
          border: "1px solid #252525",
          borderRadius: "14px",
          padding: "28px 32px",
          overflowX: "auto",
          margin: "auto",
        }}
      >
        <GitHubCalendar
          username="sephml"
          blockSize={13}
          blockMargin={4}
          theme={{
            level0: "#1c1c1c",
            level1: "#14532d",
            level2: "#166534",
            level3: "#15803d",
            level4: "#10b981",
          }}
          fontSize={12}
          style={{ color: "#666666" }}
        />
      </div>
    </div>
  );
}

export default Github;
