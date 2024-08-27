import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa6";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons" title="VS code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostMan API">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
