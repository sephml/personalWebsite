import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Skills from "./Skills";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Particle />

      <div className="container-custom" style={{ position: "relative", zIndex: 10, paddingTop: "100px", paddingBottom: "80px" }}>

        {/* Header */}
        <div style={{ marginBottom: "60px" }} className="animate-fade-in">
          <div className="section-label" style={{ marginBottom: "12px" }}>Background</div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#f0f0f0",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            About <span className="gradient-text">Me</span>
          </h1>
        </div>

        {/* Bio section */}
        <div
          style={{
            display: "grid",
            gap: "40px",
            marginBottom: "80px",
            alignItems: "start",
          }}
          className="lg:grid-cols-[1fr_380px]"
        >
          <Aboutcard />

          {/* Quick facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: "Location", value: "London, UK" },
              { label: "Education", value: "MSc AI · Queen Mary (Distinction)" },
              { label: "Specialisation", value: "LLMs & Production AI" },
              { label: "Languages", value: "Python · C++ · JavaScript" },
              { label: "Status", value: "Open to opportunities", highlight: true },
            ].map(({ label, value, highlight }) => (
              <div
                key={label}
                style={{
                  background: "#0f0f0f",
                  border: `1px solid ${highlight ? "rgba(16,185,129,0.25)" : "#252525"}`,
                  borderRadius: "10px",
                  padding: "14px 18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = highlight ? "rgba(16,185,129,0.4)" : "#333333"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = highlight ? "rgba(16,185,129,0.25)" : "#252525"; }}
              >
                <span style={{ fontSize: "0.8rem", color: "#555555", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>{label}</span>
                <span style={{ fontSize: "0.875rem", color: highlight ? "#10b981" : "#f0f0f0", fontWeight: 500, textAlign: "right" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #1c1c1c", marginBottom: "80px" }} />

        {/* Skills */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "40px" }}>
            <div className="section-label" style={{ marginBottom: "10px" }}>Technical stack</div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#f0f0f0",
                margin: 0,
              }}
            >
              Professional <span className="gradient-text">Skillset</span>
            </h2>
          </div>
          <Skills />
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #1c1c1c", marginBottom: "80px" }} />

        {/* Tools */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ marginBottom: "40px" }}>
            <div className="section-label" style={{ marginBottom: "10px" }}>Environment</div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#f0f0f0",
                margin: 0,
              }}
            >
              Tools &amp; <span className="gradient-text">Platforms</span>
            </h2>
          </div>
          <Toolstack />
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #1c1c1c", marginBottom: "80px" }} />

        {/* GitHub */}
        <Github />
      </div>
    </div>
  );
}

export default About;
