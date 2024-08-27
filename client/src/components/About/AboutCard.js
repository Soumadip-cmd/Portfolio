import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple" style={{paddingRight:'7px'}} ><b><i>Soumadip Santra</i></b></span>
              from the vibrant city of <span className="purple"><b><i>Kolkata, India.</i></b></span>
            <br />
            I am currently on a journey towards earning my <b><i>B.Tech</i></b> degree in <b><i className="purple" style={{paddingRight:'7px'}}>Computer Science and Engineering(CSE)</i></b>
            at the <b><i className="purple">Future Institute of Engineering and Management</i></b>.
            <br />
            My ambition is to carve out a successful career as a <b><i className="purple">software developer</i></b>, creating impactful solutions.
            <br />
            <br />
            Besides my passion for coding, I find joy in indulging in a few other activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <i style={{paddingLeft:'4px'}}>Creating Games</i>
            </li>
            <li className="about-activity">
              <ImPointRight /> <i style={{paddingLeft:'4px'}}>Writing Tech Blogs</i>
            </li>
            <li className="about-activity">
              <ImPointRight /> <i style={{paddingLeft:'4px'}}>Traveling</i>
            </li>
            <li className="about-activity">
              <ImPointRight /> <i style={{paddingLeft:'4px'}}>Graphic Designer</i>
            </li>
          </ul>

          <p style={{ color: "#00ff99" }}>
            <b><i>"Strive to build things that make a difference!"</i></b>{" "}
          </p>
          <footer className="blockquote-footer"><b><i>Soumadip Santra</i></b></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
