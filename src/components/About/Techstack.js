import React from "react";
import { Col, Row } from "react-bootstrap";
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
} from "react-icons/si";

// Tech stack data array
const techStackData = [
  { icon: DiPython, name: "Python" },
  { icon: CgCPlusPlus, name: "C++" },
  { icon: DiJavascript1, name: "JavaScript" },
  { icon: SiPytorch, name: "PyTorch" },
  { icon: SiTensorflow, name: "TensorFlow" },
  { icon: SiScikitlearn, name: "Scikit-learn" },
  { icon: SiKeras, name: "Keras" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiNumpy, name: "NumPy" },
  { icon: SiPandas, name: "Pandas" },
  { icon: SiSpacy, name: "spaCy" },
  { icon: SiDjango, name: "Django" },
  { icon: DiNodejs, name: "Node.js" },
  { icon: DiReact, name: "React" },
  { icon: DiMongodb, name: "MongoDB" },
  { icon: DiGit, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((tech, index) => {
        const IconComponent = tech.icon;
        return (
          <Col xs={4} md={2} className="tech-icons" key={index}>
            <div style={{ textAlign: "center" }}>
              <IconComponent />
              <p style={{ fontSize: "12px", marginTop: "8px", marginBottom: "0" }}>
                {tech.name}
              </p>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Techstack;
