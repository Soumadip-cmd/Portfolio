import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgC } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpress,
  SiRender,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { FaC } from "react-icons/fa6";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C Language">
        <FaC />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node JS">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React JS">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next JS">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="FireBase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS Cloud">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redis">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Render">
        <SiRender />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express JS">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java Program">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
