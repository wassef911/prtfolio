import React from "react";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import { IoIosPaper } from "react-icons/io";

import Timeline from "../Timeline";

import "react-vertical-timeline-component/style.min.css";
import "./About.style.scss";

function About({ prop }) {
  const { header, description, timeline } = prop;
  return (
    <>
      <div className="section d-flex justify-content-center flex-wrap">
        <div className="about">
          <h1>{header}</h1>
          <p>{description}</p>
        </div>
        <div className="m-auto">
          <AwesomeButton size="large" type="primary">
            <Link to="./cv.pdf" target="_blank" download>
              <IoIosPaper />
            </Link>
          </AwesomeButton>
        </div>
      </div>
      <Timeline timeline={timeline} />
    </>
  );
}

export default About;
