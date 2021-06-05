import React from "react";

import "./Showcase.style.scss";
import ArticlesCard from "../ArticlesCard";
import Riple from "../Riple";

function Showcase() {
  return (
    <>
      <div className="showcase">
        <h1 className="showcase-sub-title">Projects</h1>
        <div className="showcase-grid d-flex justify-content-center flex-row flex-wrap"></div>
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
