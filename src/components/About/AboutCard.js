import React from "react";

const Bullet = ({ text }) => (
  <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", listStyle: "none" }}>
    <span
      style={{
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: "#10b981",
        marginTop: "9px",
        flexShrink: 0,
      }}
    />
    <span style={{ color: "#888888", fontSize: "1rem", lineHeight: 1.7 }}>{text}</span>
  </li>
);

function AboutCard() {
  return (
    <div
      style={{
        background: "#0f0f0f",
        border: "1px solid #252525",
        borderRadius: "14px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <p style={{ margin: 0, color: "#888888", fontSize: "1.05rem", lineHeight: 1.75 }}>
        Hi, I'm{" "}
        <span style={{ color: "#f0f0f0", fontWeight: 600 }}>Sep</span>
        , originally from{" "}
        <span style={{ color: "#f0f0f0", fontWeight: 600 }}>Tehran</span>
        {" "}and currently based in{" "}
        <span style={{ color: "#f0f0f0", fontWeight: 600 }}>London, UK</span>
        .
      </p>

      <p style={{ margin: 0, color: "#888888", fontSize: "1.05rem", lineHeight: 1.75 }}>
        I hold an MSc in Artificial Intelligence from Queen Mary University of London (Distinction),
        where I developed a deep passion for machine learning and AI systems.
      </p>

      <p style={{ margin: 0, color: "#888888", fontSize: "1.05rem", lineHeight: 1.75 }}>
        As a Machine Learning Engineer, I specialise in building production-ready AI solutions
        with a focus on Large Language Models and their practical applications - transforming
        research concepts into scalable, real-world products.
      </p>

      <div>
        <p style={{ margin: "0 0 12px", fontWeight: 600, color: "#f0f0f0", fontSize: "0.9rem" }}>
          When I'm not coding:
        </p>
        <ul style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
          <Bullet text="Playing video games" />
          <Bullet text="Running" />
          <Bullet text="Watching series" />
        </ul>
      </div>
    </div>
  );
}

export default AboutCard;
