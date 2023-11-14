import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Sep Aminian. </span>
            Originaly from <span className="purple"> Tehran, Iran </span>
            but living in <span className="purple"> London, United Kingdom</span>
            <br /> I am a master graduate in Artificial intelligence from the Queen Mary University of London
            <br />
            Additionally, I am a machine learning engineer who enjoyes making models.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching TV series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Find creative ways to solve a business problem"{" "}
          </p>
          <footer className="blockquote-footer">Sep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
