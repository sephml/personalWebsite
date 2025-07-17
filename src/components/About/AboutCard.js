import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, my name is <span className="purple">Sep  </span>
            Originaly from <span className="purple"> Tehran </span>
            but living in <span className="purple"> London, UK</span>
            <br /> I am an MSc. graduate in AI from the Queen Mary University of London.
            <br />
            Additionally, I am a machine learning engineer who enjoys playing around with models and shipping new ideas.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching some series
            </li>
          </ul>

          </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
