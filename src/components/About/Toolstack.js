import React from "react";
import {
  SiVisualstudiocode,
  SiLinux,
  SiWindows,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const tools = [
  { component: SiWindows, name: "Windows" },
  { component: SiLinux, name: "Linux" },
  { component: SiVisualstudiocode, name: "VS Code" },
  { component: FaAws, name: "AWS" },
  { component: VscAzure, name: "Azure" },
];

function Toolstack() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
        gap: "8px",
      }}
    >
      {tools.map(({ component: Tool, name }) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            padding: "22px 14px",
            background: "#161616",
            border: "1px solid #252525",
            borderRadius: "10px",
            transition: "all 0.2s ease",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)";
            e.currentTarget.style.background = "#1a1a1a";
            e.currentTarget.querySelector("svg").style.color = "#10b981";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#252525";
            e.currentTarget.style.background = "#161616";
            e.currentTarget.querySelector("svg").style.color = "#555555";
          }}
        >
          <Tool style={{ fontSize: "2rem", color: "#555555", transition: "color 0.2s" }} />
          <span style={{ fontSize: "0.75rem", color: "#666666", fontWeight: 500, fontFamily: "'JetBrains Mono', monospace" }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
