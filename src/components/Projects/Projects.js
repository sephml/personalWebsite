import React from "react";
import Particle from "../Particle";
import frozen from "../../Assets/Projects/deepq.png";
import mcts from "../../Assets/Projects/mcts.png";
import vision from "../../Assets/Projects/CNN.png";
import search from "../../Assets/Projects/searchengine.png";
import nlp from "../../Assets/Projects/nlp.jpg";
import ai_assistant from "../../Assets/Projects/ai_assistant.png";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const projectsData = [
  {
    imgPath: ai_assistant,
    title: "AI Planning Assistant",
    description:
      "Intelligent conversational AI assistant improving response accuracy by 40% and reducing query processing time by 2.5×. Built with GPT-4 + Pinecone vectorised retrieval and a LangGraph microservices backend.",
    ghLink: null,
    technologies: ["Python", "Flask", "GPT-4", "Pinecone", "LangGraph"],
    role: "Lead Developer",
    duration: "3 months",
  },
  {
    imgPath: search,
    title: "CORD-19 Search Engine",
    description:
      "High-performance information retrieval system for COVID-19 research articles. Led a team of 4; BM25 ranking with 85% relevance accuracy, indexing 200k+ papers with sub-second queries.",
    ghLink: "https://github.com/sephml/IR_search_engine",
    technologies: ["Python", "Node.js", "SQL", "Docker", "BM25"],
    role: "Team Lead",
    duration: "4 months",
  },
  {
    imgPath: nlp,
    title: "NLP Suite",
    description:
      "Neural network solutions for language modeling, machine translation, NER, and coreference resolution. 92% NER accuracy with BERT; 25% translation improvement over LSTM baseline.",
    ghLink: "https://github.com/sephml/NN_NLP_labs",
    technologies: ["TensorFlow", "Keras", "BERT", "ELMO", "Attention"],
    role: "Individual Project",
    duration: "6 months",
  },
  {
    imgPath: vision,
    title: "Deep Learning for Computer Vision",
    description:
      "Implemented and compared VGG16, GoogLeNet, and ResNet on ImageNet/CIFAR-10. 94% accuracy with 10× GPU speed-up via CUDA; ResNet outperformed VGG16 by 8%.",
    ghLink: "https://github.com/sephml/image-classification-deep-models",
    technologies: ["PyTorch", "VGG16", "ResNet", "CUDA", "Python"],
    role: "Individual Project",
    duration: "3 months",
  },
  {
    imgPath: frozen,
    title: "RL – Frozen Lake",
    description:
      "Q-learning and SARSA for Frozen Lake with interactive heatmap visualisation. 95% success rate; Q-learning converges 15% faster than SARSA with epsilon-greedy decay.",
    ghLink: "https://github.com/devasworski/frozen_lake",
    technologies: ["Q-Learning", "SARSA", "OpenAI Gym", "Python"],
    role: "Algorithm & Visualisation Lead",
    duration: "2 months",
  },
  {
    imgPath: mcts,
    title: "MCTS for Pommerman",
    description:
      "Enhanced MCTS with RAVE for the Pommerman multi-agent environment. Top 20% class ranking; parallel tree search cut decision time 40%; custom heuristics improved win rate 30%.",
    ghLink: null,
    technologies: ["Java", "MCTS", "RAVE", "Game AI"],
    role: "Algorithm Designer",
    duration: "3 months",
  },
];

function ProjectCard({ project, index }) {
  return (
    <div
      style={{
        background: "#0f0f0f",
        border: "1px solid #252525",
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(16,185,129,0.3)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#252525";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
        <img
          src={project.imgPath}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            display: "block",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(6,6,6,0.6) 0%, transparent 50%)",
          }}
        />
        {/* Role badge */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(6,6,6,0.85)",
            border: "1px solid #333333",
            borderRadius: "6px",
            padding: "4px 10px",
            fontSize: "0.7rem",
            color: "#888888",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {project.role}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f0f0f0", margin: 0, lineHeight: 1.3 }}>
            {project.title}
          </h2>
          <span
            style={{
              fontSize: "0.7rem",
              color: "#555555",
              fontFamily: "'JetBrains Mono', monospace",
              flexShrink: 0,
              marginTop: "3px",
            }}
          >
            {project.duration}
          </span>
        </div>

        <p style={{ color: "#888888", fontSize: "0.875rem", lineHeight: 1.7, margin: 0, flex: 1 }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                background: "#161616",
                border: "1px solid #252525",
                borderRadius: "5px",
                padding: "3px 9px",
                fontSize: "0.7rem",
                color: "#666666",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        {project.ghLink ? (
          <a
            href={project.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              background: "transparent",
              border: "1px solid #333333",
              borderRadius: "8px",
              color: "#888888",
              fontSize: "0.85rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "all 0.15s ease",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
              e.currentTarget.style.color = "#10b981";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#333333";
              e.currentTarget.style.color = "#888888";
            }}
          >
            <FaGithub style={{ fontSize: "1rem" }} />
            View on GitHub
            <HiExternalLink style={{ fontSize: "0.85rem", opacity: 0.6 }} />
          </a>
        ) : (
          <span
            style={{
              fontSize: "0.75rem",
              color: "#555555",
              fontFamily: "'JetBrains Mono', monospace",
              padding: "8px 0 0",
            }}
          >
            // private or proprietary
          </span>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Particle />

      <div className="container-custom" style={{ position: "relative", zIndex: 10, paddingTop: "100px", paddingBottom: "80px" }}>
        {/* Header */}
        <div style={{ marginBottom: "60px" }} className="animate-fade-in">
          <div className="section-label" style={{ marginBottom: "12px" }}>Portfolio</div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#f0f0f0",
              margin: "0 0 14px",
              lineHeight: 1.05,
            }}
          >
            Selected <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: "#888888", maxWidth: "540px", lineHeight: 1.7, margin: 0 }}>
            A selection of projects spanning LLMs, reinforcement learning, NLP, and computer vision.
            Want to collaborate?{" "}
            <a
              href="https://www.linkedin.com/in/amirsepehr-aminian/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#10b981", fontWeight: 500 }}
            >
              Let's talk.
            </a>
          </p>
        </div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "16px",
          }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
