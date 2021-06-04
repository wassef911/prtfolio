import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

function TimelineElement({ title, subTitle, description, Icon }) {
  const elementStyle = {
    background: "#2a3143",
    color: "#fff",
    boxShadow: "0px 0px 20px rgba(10, 20, 27, 0.5)",
    cursor: "default",
  };
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={elementStyle}
      contentArrowStyle={{ borderRight: "7px solid  white" }}
      iconStyle={{ background: "white", color: "#000" }}
      date="2019 - 2022"
      icon={<Icon />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h5 className="vertical-timeline-element-subtitle">{subTitle}</h5>
      {description ? (
        <div>
          <hr />
          <p>{description}</p>
        </div>
      ) : null}
    </VerticalTimelineElement>
  );
}

export default TimelineElement;
