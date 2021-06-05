import React from "react";
import TimeAgo from "react-timeago";

import "./Card.style.scss";

function ProjectsCard() {
  const { title, date, description, url } = data;
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="card project-card d-flex flex-column align-items-center m-5 "
      style={{ width: "19rem", height: "18rem" }}
    >
      <div className="card-body">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <h5 className="card-title project-card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted date">
          {" "}
          <TimeAgo date={date} />
        </h6>
        <hr style={{ color: "white" }} />

        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default ProjectsCard;
