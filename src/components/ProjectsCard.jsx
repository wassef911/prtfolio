import React from "react";
import TimeAgo from "react-timeago";

import "./Card.style.scss";

function ProjectsCard({ projects }) {
  return projects.map((project) => (
    <div
      onClick={() => window.open(project.url, "_blank")}
      className="card project-card d-flex flex-column align-items-center m-5 "
      style={{ width: "19rem" }}
    >
      <div className="card-body">
        <h6 className="card-title project-card-title">{project.title}</h6>
        <h6 className="card-subtitle mb-2 text-muted date">
          <TimeAgo date={project.date} />
        </h6>
        <hr style={{ color: "white" }} />

        <p className="card-text">{project.description}</p>
      </div>
    </div>
  ));
}

export default ProjectsCard;
