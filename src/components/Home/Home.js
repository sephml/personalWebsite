import React from "react";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const CODE_LINES = [
  { tokens: [{ t: "comment", v: "# inference.py" }] },
  { tokens: [] },
  { tokens: [{ t: "kw", v: "from" }, { t: "plain", v: " transformers " }, { t: "kw", v: "import" }, { t: "plain", v: " AutoModelForCausalLM, AutoTokenizer" }] },
  { tokens: [{ t: "kw", v: "import" }, { t: "plain", v: " torch" }] },
  { tokens: [] },
  { tokens: [{ t: "fn", v: "model" }, { t: "plain", v: " = AutoModelForCausalLM." }, { t: "fn", v: "from_pretrained" }, { t: "plain", v: "(" }] },
  { tokens: [{ t: "plain", v: "    " }, { t: "str", v: '"meta-llama/Llama-3-8B"' }, { t: "plain", v: "," }] },
  { tokens: [{ t: "plain", v: "    torch_dtype=torch." }, { t: "fn", v: "bfloat16" }, { t: "plain", v: "," }] },
  { tokens: [{ t: "plain", v: "    device_map=" }, { t: "str", v: '"auto"' }] },
  { tokens: [{ t: "plain", v: ")" }] },
  { tokens: [] },
  { tokens: [{ t: "fn", v: "outputs" }, { t: "plain", v: " = model." }, { t: "fn", v: "generate" }, { t: "plain", v: "(" }] },
  { tokens: [{ t: "plain", v: "    **inputs, max_new_tokens=" }, { t: "num", v: "512" }, { t: "plain", v: ", do_sample=" }, { t: "kw", v: "True" }] },
  { tokens: [{ t: "plain", v: ")" }] },
];

const TOKEN_COLORS = {
  comment: "#888888",
  kw: "#c792ea",
  str: "#c3e88d",
  fn: "#82aaff",
  num: "#f78c6c",
  plain: "#d4d4d4",
};

function CodeBlock() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        border: "1px solid #252525",
        borderRadius: "14px",
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.8rem",
        lineHeight: 1.7,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 16px",
          borderBottom: "1px solid #1c1c1c",
          background: "#111111",
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
        ))}
        <span style={{ marginLeft: "8px", color: "#555555", fontSize: "0.72rem" }}>inference.py</span>
      </div>

      {/* Code */}
      <div style={{ padding: "16px 20px", overflowX: "auto" }}>
        {CODE_LINES.map((line, i) => (
          <div key={i} style={{ display: "flex", gap: "16px", minHeight: "1.4rem" }}>
            <span style={{ color: "#333333", userSelect: "none", minWidth: "16px", textAlign: "right", fontSize: "0.72rem" }}>
              {i + 1}
            </span>
            <span>
              {line.tokens.map((tok, j) => (
                <span key={j} style={{ color: TOKEN_COLORS[tok.t] }}>{tok.v}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <section style={{ position: "relative" }}>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <Particle />

        <div className="container-custom" style={{ position: "relative", zIndex: 10, paddingTop: "100px", paddingBottom: "60px" }}>
          <div
            style={{ display: "grid", gap: "48px", alignItems: "center" }}
            className="lg:grid-cols-[1fr_460px]"
          >
            {/* Left */}
            <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div className="section-label">ML Engineer · AI · LLMs</div>

              <h1
                style={{
                  fontSize: "clamp(3rem, 10vw, 8rem)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: "#f0f0f0",
                  margin: 0,
                }}
              >
                Sep<br />
                <span className="gradient-text">Aminian</span>
              </h1>

              <div style={{ height: "28px", display: "flex", alignItems: "center" }}>
                <Type />
              </div>

              <p style={{ fontSize: "1.05rem", color: "#888888", maxWidth: "460px", lineHeight: 1.75, margin: 0 }}>
                Building production-ready AI systems and Large Language Model solutions.
                Currently at{" "}
                <span style={{ color: "#f0f0f0", fontWeight: 500 }}>Carpmaels & Ransford</span>
                {" "}- London.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", paddingTop: "8px" }}>
                <a href="https://www.linkedin.com/in/amirsepehr-aminian/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Get In Touch
                </a>
                <a href="/project" className="btn-secondary">View Work →</a>
              </div>

              {/* Stat strip */}
              <div style={{ display: "flex", gap: "24px", paddingTop: "4px", flexWrap: "wrap" }}>
                {[
                  { value: "3+", label: "yrs ML/AI" },
                  { value: "MSc", label: "AI · Distinction" },
                  { value: "£2.8m", label: "cost savings delivered" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#10b981", lineHeight: 1 }}>{value}</div>
                    <div style={{ fontSize: "0.72rem", color: "#555555", marginTop: "4px", fontFamily: "'JetBrains Mono', monospace" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: code block */}
            <div className="animate-slide-up hidden lg:block">
              <CodeBlock />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
          className="animate-bounce"
        >
          <div style={{ width: "22px", height: "38px", border: "2px solid #333333", borderRadius: "12px", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "4px" }}>
            <div style={{ width: "4px", height: "8px", background: "#10b981", borderRadius: "2px" }} />
          </div>
        </div>
      </div>

      <Home2 />
    </section>
  );
}

export default Home;
