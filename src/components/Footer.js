import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #1c1c1c",
        position: "relative",
        zIndex: 10,
        background: "#060606",
      }}
    >
      <div
        className="container-custom"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "32px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Logo */}
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "#10b981",
            }}
          >
            sep.aminian
          </span>

          {/* Social */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { href: "https://github.com/sephml", icon: AiFillGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/amirsepehr-aminian/", icon: FaLinkedinIn, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  border: "1px solid #252525",
                  color: "#555555",
                  fontSize: "1.05rem",
                  transition: "all 0.15s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#10b981";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#555555";
                  e.currentTarget.style.borderColor = "#252525";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <span
            style={{
              fontSize: "0.78rem",
              color: "#555555",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            © {year} Sep Aminian
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
