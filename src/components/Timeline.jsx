import React from "react";
import TimelineElement from "./TimelineElement";
import { VerticalTimeline } from "react-vertical-timeline-component";

function Timeline({ timeline }) {
  return (
    <VerticalTimeline>
      {timeline.map((element) => (
        <TimelineElement {...element} />
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;
