import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import react from "../../assets/react.svg";
import ocrpng from "../../assets/ocrpng.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="SheetMatch"
              description="App to aid data analysis by comparing excel spreadsheets"
              ghLink="https://github.com/dominicvery"
              //demoLink=
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocrpng}
              isBlog={false}
              title="Enhanced OCR"
              description="More accurate OCR for individual handwriting"
              ghLink="https://github.com/dominicvery"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Currently <strong className="purple">In Development </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="RightMovelearner"
              description="App to aid flat searching, learning a users likes and sending the best options as soon as they become available"
              //ghLink=
              //demoLink=
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="lime maps"
              description="Faster map routes by using a lime bike"
              //ghLink=
              //demoLink=             
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;