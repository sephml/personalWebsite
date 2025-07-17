import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiLinux,
  SiWindows,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

function Toolstack() {
  const tools = [
    { component: SiWindows, name: "Windows" },
    { component: SiLinux, name: "Linux" },
    { component: SiVisualstudiocode, name: "VS Code" },
    { component: FaAws, name: "AWS" },
    { component: VscAzure, name: "Azure" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ component: Tool, name }, index) => (
        <Col key={name} xs={4} md={2} className="tech-icons">
          <Tool />
          <p style={{ fontSize: "14px", marginTop: "8px", textAlign: "center" }}>
            {name}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
