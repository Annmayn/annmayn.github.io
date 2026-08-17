import { Fragment, type CSSProperties } from "react";
import { Flex, Heading, Section, Text } from "@radix-ui/themes";
import houzz from "../assets/houzz_logo.jpg";
import logicurv from "../assets/logicurv_logo.jpg";
import promoty from "../assets/promoty_logo.jpg";
import codavatar from "../assets/codavatar_logo.jpg";
import raralabs from "../assets/raralabs_logo.jpg";
import sparkle from "../assets/sparkle.svg";
import line4 from "../assets/line4.svg";
import line5 from "../assets/line5.svg";
import Line3SVG from "../assets/line3.svg";
import { experience } from "../data/portfolio";

const logos: Record<string, string> = {
  houzz,
  logicurv,
  promoty,
  codavatar,
  raralabs,
};

const itemAccents = ["#a981fe", "#f47acb", "#7ec8ff", "#b8fe81", "#ff9b6a"];

export default function Employment() {
  return (
    <Section id="experience" aria-labelledby="experience-title" size="1">
      <Text as="p" className="section-label">
        Work
      </Text>
      <Heading as="h2" id="experience-title" className="section-title">
        Experience
      </Heading>
      <Flex
        className="connector"
        justify="center"
        style={{ marginTop: 0, marginBottom: "1.25rem" }}
      >
        <img src={Line3SVG} alt="" width={120} />
      </Flex>
      <div className="timeline">
        {experience.map((job, index) => {
          const reverse = index % 2 === 1;
          const connectorLine = index % 2 === 0 ? line4 : line5;

          return (
            <Fragment key={job.company}>
              <article
                className={`timeline-item${reverse ? " timeline-item--reverse" : ""}`}
                style={
                  {
                    "--item-index": index,
                    "--item-accent": itemAccents[index % itemAccents.length],
                  } as CSSProperties
                }
              >
                <div className="timeline-visual" aria-hidden="true">
                  <span className="timeline-visual-mark">{job.company[0]}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="timeline-heading">
                      <Heading as="h3" className="timeline-company">
                        {job.company}
                      </Heading>
                      <Text as="span" className="timeline-years">
                        {job.years}
                      </Text>
                    </div>
                    <div className="timeline-logo-wrap">
                      <img
                        className="timeline-logo"
                        src={logos[job.logo]}
                        alt={`${job.company} logo`}
                      />
                      <span className="timeline-logo-ring" />
                      <img
                        className="timeline-logo-sparkle"
                        src={sparkle}
                        alt=""
                      />
                    </div>
                  </div>
                  <Text as="span" className="role">
                    {job.role}
                  </Text>
                  <Text as="p">{job.description}</Text>
                </div>
              </article>
              {index < experience.length - 1 && (
                <div
                  className={`timeline-connector${reverse ? " timeline-connector--start" : " timeline-connector--end"}`}
                  aria-hidden="true"
                >
                  <img src={connectorLine} alt="" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </Section>
  );
}
