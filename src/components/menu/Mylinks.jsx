import React from "react";
import { AwesomeButton } from "react-awesome-button";

import { GrFacebook } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

function Mylinks() {
  const buttons = [
    { icon: <GrFacebook />, link: "https://www.facebook.com/wassef911" },
    {
      icon: <FaGithubSquare style={{ fontSize: "1.1em" }} />,
      link: "https://github.com/wassef911",
    },
    {
      icon: <AiFillLinkedin style={{ fontSize: "1.3em" }} />,
      link: "https://www.linkedin.com/in/wassef-ben-ahmed-7937b81b3",
    },
    {
      icon: <FaDev style={{ fontSize: "1.1em" }} />,
      link: "https://dev.to/wassef911",
    },
  ];
  return (
    <div className="d-flex justify-content-around flex-wrap socialIcons">
      {buttons.map((button, i) => {
        return (
          <AwesomeButton
            key={i}
            onPress={() => window.open(button.link, "_blank")}
            size="icon"
            type="primary"
            aria-label="visit website"
          >
            {button.icon}
          </AwesomeButton>
        );
      })}
    </div>
  );
}
export default React.memo(Mylinks);
