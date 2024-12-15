import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akshit Sharma </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently a final year BTech. Computer Science student at IIIT Hyderabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Wander far, but let technology be your compass—guiding you to new horizons without limits."{" "}
          </p>
          <footer className="blockquote-footer">Akshit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
