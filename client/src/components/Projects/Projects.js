import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LibManage from "../../Assets/Projects/LibManage.png";
import SpaceInvaders from "../../Assets/Projects/SpaceInvaders.png";

import EMS from "../../Assets/Projects/EMS.png";

import iNoteBook from "../../Assets/Projects/iNoteBook.png";
import LMS from "../../Assets/Projects/LMS.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LMS}
              isBlog={false}
              title="Learning Management System "
              description="This is a production-level Learning Management System (LMS) using Next.js and TypeScript, hosted on AWS with robust security measures. The backend is optimized with Redis for efficient cache management, ensuring fast and reliable performance. This LMS offers a seamless, secure, and scalable solution for managing educational content."
              ghLink="http://localhost:3000/project"
              demoLink="http://localhost:3000/project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iNoteBook}
              isBlog={false}
              title="iNote-Book"
              description="This is iNotebook, an application that allows users to store, edit, and delete notes securely. The backend is built with Express and MongoDB, while the frontend is powered by React.js and Node.js. iNotebook ensures personalized note management for every user, offering a seamless and efficient experience."
              ghLink="https://github.com/Soumadip-cmd/iNote-Book"
              demoLink="https://i-note-book-frontend-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EMS}
              isBlog={false}
              title="Employee Management System"
              description="I'm developing a full-stack employee management system with robust security, ensuring only admins have access. Admins can easily manage all employees, view department details, track staff numbers by department, handle leave requests, and manage the salary records for each employee, including tracking and processing payments."
              ghLink="https://github.com/Soumadip-cmd/Employee--Management-"
              demoLink="https://employee-management-sb5z.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LibManage}
              isBlog={false}
              title="Library Management BOT"
              description="I developed a library management bot using C programming. The bot tracks each student by their roll number and analyzes their initial book choices over three days. If a student regularly chooses adventure books, the bot suggests similar titles, helping users find the perfect book tailored to their preferences."
              ghLink="https://github.com/Soumadip-cmd/Library-Management-System"
              demoLink="https://github.com/Soumadip-cmd/Library-Management-System"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SpaceInvaders}
              isBlog={false}
              title="Space Invaders Game"
              description="I developed a Space Invaders game using Pygame, featuring sound effects, pause, play, and exit options. The game tracks and saves high scores, allowing players to compete against their best performances. This classic arcade game experience combines engaging gameplay with modern features for enhanced user interaction and enjoyment."
              ghLink="https://github.com/Soumadip-cmd/Space-Invaders-Game"
              demoLink="https://github.com/Soumadip-cmd/Space-Invaders-Game"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
