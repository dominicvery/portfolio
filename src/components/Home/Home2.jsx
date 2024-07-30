import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import react from "../../assets/react.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Me </span> 
            </h1>
            <p className="home-about-body">
            Working as a data manager but passionate about coding and software develoment
              <br />
              <br />Proficient in 
              <i>
                <b className="purple"> C++, Python and Javascript </b> 
              </i>
              and Frameworks like
              <i>
                <b className="purple"> React </b>
              </i>
              <br />
              <br />
              I enjoy&nbsp;developing technologies to streamline services and jobs for both buisnesses and individuals 
  
              <br />
              <br />
              Also experienced
              with <b className="purple">data piplelines</b>
              <i>
              </i>
              &nbsp; using
              <i>
                <b className="purple"> Aws, Snowflake and dbt</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={react} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dominicvery"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dominic-veryard-5086b9188/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={`mailto:dominicveryard@gmail.com?subject=WebsiteEnquiry&body`}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdAlternateEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;