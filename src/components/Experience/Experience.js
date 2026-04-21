import React from "react";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool, MdCheckCircle } from "react-icons/md";

const experiences = [
  {
    title: "ML Engineer and Python Developer",
    company: "Carpmaels & Ransford",
    location: "London, UK",
    date: "2026 – Present",
    type: "work",
    description: [
      "Architecting and delivering production AI systems for intelligent document processing, leveraging Azure OpenAI, Azure AI Search, and Document Intelligence",
      "Designing RAG pipelines with hybrid BM25 + vector search over legal documents, integrated with Cosmos DB and Azure Blob Storage",
      "Building and maintaining microservices with FastAPI on Azure Container Apps, with full CI/CD pipelines via Azure DevOps",
      "Creating agentic workflows for prosecution of IP cases, developing a set of MCP and harness engineering capabilities to automate legal research and drafting",
    ],
  },
  {
    title: "Software Consultant – Assistant Manager",
    company: "S&W",
    location: "London, UK",
    date: "2024 – 2026",
    type: "work",
    description: [
      "Developed and deployed production-ready AI solutions for report generation using Large Language Models",
      "Implemented microservices architecture for AI applications with Flask and FastAPI",
      "Achieved an estimated cost reduction of £2.8m/year by improving productivity and efficiency",
      "Collaborated with cross-functional teams to integrate AI features into existing PoC",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Definely",
    location: "London, UK",
    date: "2022 – 2023",
    type: "work",
    description: [
      "Developed and deployed production-ready ML models for detecting defined terms and references in commercial contracts using transformers",
      "Achieved 90% accuracy on defined-term and reference detection in commercial contracts",
      "Built a pipeline for feature extraction, training, and deployment of ML models",
    ],
  },
  {
    title: "MSc in Artificial Intelligence",
    company: "Queen Mary University of London",
    location: "London, UK",
    date: "2022 – 2023",
    type: "education",
    description: [
      "Graduated with Distinction",
      "Specialised in Deep Learning and Natural Language Processing",
      "Coursework: Advanced ML, Computer Vision, Neural Networks, AI for Games, NLP, Information Retrieval",
    ],
  },
];

function Experience() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Particle />

      <div className="container-custom" style={{ position: "relative", zIndex: 10, paddingTop: "100px", paddingBottom: "80px" }}>
        {/* Header */}
        <div style={{ marginBottom: "60px" }} className="animate-fade-in">
          <div className="section-label" style={{ marginBottom: "12px" }}>Career</div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#f0f0f0",
              margin: "0 0 12px",
              lineHeight: 1.05,
            }}
          >
            My Professional <span className="gradient-text">Journey</span>
          </h1>
          <p style={{ color: "#888888", fontSize: "1rem", maxWidth: "540px", margin: 0, lineHeight: 1.7 }}>
            Education and professional experience in AI and Machine Learning
          </p>
        </div>

        <VerticalTimeline lineColor="#252525">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#0f0f0f",
                border: "1px solid #252525",
                borderRadius: "12px",
                boxShadow: "none",
                padding: "24px 28px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #252525" }}
              date={exp.date}
              dateClassName="timeline-date"
              iconStyle={{
                background: exp.type === "work" ? "#0f0f0f" : "#0f0f0f",
                border: `2px solid ${exp.type === "work" ? "#10b981" : "#888888"}`,
                boxShadow: exp.type === "work"
                  ? "0 0 0 3px rgba(16,185,129,0.1)"
                  : "0 0 0 3px rgba(136,136,136,0.1)",
                color: exp.type === "work" ? "#10b981" : "#888888",
              }}
              icon={exp.type === "work" ? <MdWork /> : <MdSchool />}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#f0f0f0",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {exp.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: exp.type === "work" ? "#10b981" : "#888888",
                    }}
                  >
                    {exp.company}
                  </span>
                  <span style={{ color: "#333333", fontSize: "0.8rem" }}>·</span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#555555",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {exp.location}
                  </span>
                </div>

                {exp.description.length > 0 && (
                  <ul style={{ margin: "8px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          listStyle: "none",
                          color: "#888888",
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                        }}
                      >
                        <MdCheckCircle
                          style={{
                            color: "#10b981",
                            fontSize: "1rem",
                            flexShrink: 0,
                            marginTop: "3px",
                            opacity: 0.7,
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
