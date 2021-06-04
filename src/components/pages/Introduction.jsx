import React from "react";
import Particles from "react-particles-js";

import params from "../../utils/params";
import "./Introduction.style.scss";
import "./animation.style.scss";

function Introduction({ prop }) {
  const { name, description, underline } = prop;
  return (
    <>
      <Particles params={params} />
      <h1>
        <span title="911" className="underline black911">
          {underline}
        </span>
      </h1>
      <div className="text">
        <h1 className="name m-0">{name}</h1>
        <p
          className="shortDescription"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </>
  );
}

export default Introduction;
