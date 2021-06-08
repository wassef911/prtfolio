import React from "react";

import "./Showcase.style.scss";
import ArticlesCard from "../ArticlesCard";
import ProjectsCard from "../ProjectsCard";
import Riple from "../Riple";

function Showcase({ prop }) {
  return (
    <>
      <div className="showcase">
        <h1 className="showcase-sub-title">Projects</h1>
        <div className="showcase-grid d-flex justify-content-center flex-row flex-wrap">
          <ProjectsCard projects={prop.projects} />
        </div>
        <h1 className="showcase-sub-title">Articles</h1>
        <div className="showcase-grid d-flex justify-content-center flex-row flex-wrap">
          <ArticlesCard />
        </div>
        <Riple />
      </div>
    </>
  );
}

export default Showcase;
