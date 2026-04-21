import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiDocker,
  SiDjango,
  SiNumpy,
  SiPandas,
  SiSpacy,
  SiOpenai,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages & Core",
    skills: [
      { icon: DiPython, name: "Python" },
      { icon: CgCPlusPlus, name: "C++" },
      { icon: DiJavascript1, name: "JavaScript" },
    ],
  },
  {
    title: "ML / Deep Learning",
    skills: [
      { icon: SiPytorch, name: "PyTorch" },
      { icon: SiTensorflow, name: "TensorFlow" },
      { icon: SiKeras, name: "Keras" },
      { icon: SiScikitlearn, name: "Scikit-learn" },
    ],
  },
  {
    title: "NLP & LLMs",
    skills: [
      { icon: SiOpenai, name: "OpenAI API" },
      { icon: SiSpacy, name: "spaCy" },
      { icon: SiNumpy, name: "Transformers" },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { icon: SiNumpy, name: "NumPy" },
      { icon: SiPandas, name: "Pandas" },
    ],
  },
  {
    title: "Web & Backend",
    skills: [
      { icon: SiDjango, name: "Django" },
      { icon: DiNodejs, name: "Node.js" },
      { icon: DiReact, name: "React" },
      { icon: DiMongodb, name: "MongoDB" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { icon: SiDocker, name: "Docker" },
      { icon: DiGit, name: "Git" },
    ],
  },
];

const SkillIcon = ({ icon: Icon, name }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      padding: "18px 12px",
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
    <Icon style={{ fontSize: "2rem", color: "#555555", transition: "color 0.2s" }} />
    <span style={{ fontSize: "0.72rem", color: "#666666", fontWeight: 500, textAlign: "center", fontFamily: "'JetBrains Mono', monospace" }}>
      {name}
    </span>
  </div>
);

function Skills() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {skillCategories.map((category) => (
        <div key={category.title}>
          <div
            style={{
              fontSize: "0.75rem",
              fontFamily: "'JetBrains Mono', monospace",
              color: "#555555",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "14px",
              paddingLeft: "2px",
            }}
          >
            {category.title}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
              gap: "8px",
            }}
          >
            {category.skills.map((skill) => (
              <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
