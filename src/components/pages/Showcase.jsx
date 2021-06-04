import React from "react";

import "./Showcase.style.scss";
import Card from "../Card";
import Riple from "../Riple";

function Showcase({ prop }) {
  const { headers, articles, projects } = prop;
  return (
    <>
      <div className="showcase">
        <h1 className="showcase-sub-title">{headers[0]}</h1>
        <div className="showcase-grid d-flex justify-content-center flex-row flex-wrap">
          {projects.map((project, i) => (
            <Card key={i} data={project} />
          ))}
        </div>
        <h1 className="showcase-sub-title">{headers[1]}</h1>
        <div className="showcase-grid d-flex justify-content-center flex-row flex-wrap">
          {articles.map((article, i) => (
            <Card key={i} data={article} />
          ))}
        </div>
        <Riple />
      </div>
    </>
  );
}

export default Showcase;
