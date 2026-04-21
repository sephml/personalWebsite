import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { MdWorkOutline } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", path: "/", icon: AiOutlineHome },
  { name: "About", path: "/about", icon: AiOutlineUser },
  { name: "Experience", path: "/experience", icon: MdWorkOutline },
  { name: "Projects", path: "/project", icon: AiOutlineFundProjectionScreen },
  { name: "Resume", path: "/resume", icon: CgFileDocument },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled ? "1px solid #252525" : "1px solid transparent",
        background: scrolled ? "rgba(6,6,6,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container-custom">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "68px" }}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              fontSize: "1.1rem",
              color: "#10b981",
              letterSpacing: "0.02em",
              textDecoration: "none",
            }}
          >
            sep.aminian
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center" style={{ gap: "4px" }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: isActive(item.path) ? 600 : 400,
                    color: isActive(item.path) ? "#10b981" : "#888888",
                    background: isActive(item.path) ? "rgba(16,185,129,0.08)" : "transparent",
                    border: isActive(item.path) ? "1px solid rgba(16,185,129,0.2)" : "1px solid transparent",
                    transition: "all 0.15s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      e.currentTarget.style.color = "#f0f0f0";
                      e.currentTarget.style.background = "#161616";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      e.currentTarget.style.color = "#888888";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  <Icon style={{ fontSize: "0.95rem" }} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              color: "#f0f0f0",
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden"
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          borderTop: isOpen ? "1px solid #252525" : "none",
          background: "rgba(6,6,6,0.97)",
        }}
      >
        <div style={{ padding: "12px 16px 20px" }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  fontSize: "0.9rem",
                  fontWeight: isActive(item.path) ? 600 : 400,
                  color: isActive(item.path) ? "#10b981" : "#888888",
                  background: isActive(item.path) ? "rgba(16,185,129,0.08)" : "transparent",
                  marginBottom: "4px",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <Icon />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
