import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaDownload, FaPlay } from "react-icons/fa";

import { Container, Wrapper } from "../../lib/container";
import { Typography } from "../../lib/typography";
import resume from "../../assets/Luke_Jeffers.pdf";
import { Download, RelativeWrapper } from "./styles";
import { works } from "../../constants";

const Resume = () => {
  return (
    <Container>
      <Wrapper>
        <RelativeWrapper>
          <Download download="Resume" href={resume}>
            RESUME
            <FaDownload />
          </Download>
          <Typography variant="h2" align="center" color="white">
            Working Experience
          </Typography>
          <div>
            <VerticalTimeline>
              {works.map((work, idx) => {
                const { icon, title, subTitle, date, content } = work;
                const props = {
                  className: "vertical-timeline-element--work",
                  contentStyle:
                    idx === 0
                      ? { background: "rgb(33, 150, 243)", color: "#fff" }
                      : null,
                  contentArrowStyle:
                    idx === 0
                      ? { borderRight: "7px solid  rgb(33, 150, 243)" }
                      : null,
                  icon: React.createElement(icon),
                  date,
                  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
                  key: `work-experience-${idx}`,
                };
                return (
                  <VerticalTimelineElement {...props} key={idx}>
                    <h3 className="vertical-timeline-element-title">{title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {subTitle}
                    </h4>
                    <p>{content}</p>
                  </VerticalTimelineElement>
                );
              })}
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<FaPlay fontSize="large" />}
              />
            </VerticalTimeline>
          </div>
        </RelativeWrapper>
      </Wrapper>
    </Container>
  );
};

export default Resume;
