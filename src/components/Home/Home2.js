import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              I WOULD LIKE TO <span className="strongblue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello everyone, My name is <span className="strongblue">Muhammad Ilham Jaya</span>
              <br />I`m 16 y.o Software Engineering student at SMKN 5 Surakarta which is one of the best Vocational High School in Indonesia
              <br />
              The first time I learned, did, and was interested in <span className="strongblue">Programming</span>
              is when i developed my friend`s SA:MP server in 2020 using <strong>Pawn</strong> Language. Since then, I`m very curious to learning others Programming language.
              <br />
              <br />
              And now I am studying and deepening other programming languages ​​such as Javascript, Java, Python, etc including their frameworks
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND AND INTERACT WITH ME</h1>
            <p>
              let Come to be friends, collaborate and share with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ilhamjaya08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/6289603982787"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
