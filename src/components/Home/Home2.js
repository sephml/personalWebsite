import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div
      style={{
        borderTop: "1px solid #252525",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container-custom" style={{ padding: "80px 16px" }}>

        <div
          style={{
            display: "grid",
            gap: "60px",
            alignItems: "center",
          }}
          className="lg:grid-cols-[1fr_300px]"
        >
          {/* Text */}
          <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="section-label">About me</div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#f0f0f0",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Let me <span className="gradient-text">introduce</span> myself
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "#888888", fontSize: "1.05rem", lineHeight: 1.75 }}>
              <p style={{ margin: 0 }}>
                I'm passionate about building intelligent systems that solve real-world problems.
                With expertise in{" "}
                <span style={{ color: "#f0f0f0", fontWeight: 500 }}>Large Language Models</span>
                {" "}and deep learning, I transform cutting-edge AI research into production-ready solutions.
              </p>
              <p style={{ margin: 0 }}>
                Fluent in{" "}
                <span style={{ color: "#f0f0f0", fontWeight: 500 }}>Python, C++, and JavaScript</span>
                , with a strong foundation in modern ML/AI frameworks - PyTorch, TensorFlow, and the broader HuggingFace ecosystem.
              </p>
              <p style={{ margin: 0 }}>
                Beyond coding, I enjoy{" "}
                <span style={{ color: "#f0f0f0", fontWeight: 500 }}>exploring startup ideas</span>
                , travelling, and gaming to stay creative.
              </p>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px", paddingTop: "8px" }}>
              <a
                href="https://github.com/sephml"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  border: "1px solid #252525",
                  background: "#0f0f0f",
                  color: "#888888",
                  fontSize: "1.25rem",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f0f0f0";
                  e.currentTarget.style.borderColor = "#333333";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#888888";
                  e.currentTarget.style.borderColor = "#252525";
                }}
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/amirsepehr-aminian/"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  border: "1px solid #252525",
                  background: "#0f0f0f",
                  color: "#888888",
                  fontSize: "1.15rem",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#10b981";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#888888";
                  e.currentTarget.style.borderColor = "#252525";
                }}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div
            className="animate-float"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
              <div
                style={{
                  width: "260px",
                  height: "260px",
                  borderRadius: "20px",
                  border: "1px solid #252525",
                  background: "#0f0f0f",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#252525"; }}
              >
                <img
                  src={myImg}
                  alt="avatar"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
