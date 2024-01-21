import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            This is a session where I show a profile about <span className="strongblue"> myself </span>
            I was born, raised and live until now in <span className="strongblue"> Karanganyar, Indonesia.</span>
            <br />
            I am 16 years old and now studying at the Software Engineering Vocational School at SMKN 5 Surakarta
            <br />
            I have dreams of becoming a Full Stack Developer in the future.
            <br />
            <br />
            My daily life is living my daily activity and going to school, apart from that I also learn coding and practice it in several of my projects
          </p>
          

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
