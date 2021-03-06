import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "./timeline.css";

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--facebook"
        date="2017 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon=""
      >
        <h3 className="vertical-timeline-element-title">
          Director of Information Technology
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          @Prosperity Now | Washington, DC
        </h4>
        <p>All things technology at Prosperity Now</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014 - 2017"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff"
        }}
        icon={<i className="big rocket icon" />}
      >
        <h3 className="vertical-timeline-element-title">Technical Lead</h3>
        <h4 className="vertical-timeline-element-subtitle">
          @NASA/a.i. solutions inc. | Lanham, MD
        </h4>
        <p>Putting things in space</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2012 - 2014"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon=""
      >
        <h3 className="vertical-timeline-element-title">
          Network and Systems Engineer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          @CFED | Washington, DC
        </h4>
        <p>Building production systems to drive our mission</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2004 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon=""
      >
        <h3 className="vertical-timeline-element-title">Manager</h3>
        <h4 className="vertical-timeline-element-subtitle">
          @United States Marine Corps | Worldwide
        </h4>
        <p>Led Marines on combat operations</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
export default Timeline;
