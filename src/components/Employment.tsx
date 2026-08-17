import { Fragment, type CSSProperties } from "react";
import { Flex, Heading, Section, Text } from "@radix-ui/themes";
import houzz from "../assets/houzz_logo.jpg";
import houzzPhoto from "../assets/houzz_exp.jpg";
import logicurv from "../assets/logicurv_logo.jpg";
import logicurvVisual from "../assets/basiyo_exp.png";
import promoty from "../assets/promoty_logo.jpg";
import codavatar from "../assets/codavatar_logo.jpg";
import codavatarVisual from "../assets/codavatar_visual.jpg";
import raralabs from "../assets/raralabs_logo.jpg";
import raraLabsPhoto from "../assets/rara_labs.jpg";
import promotyVisual from "../assets/promoty_exp.jpg";
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

const visuals: Partial<
  Record<string, { src: string; alt: string; objectPosition?: string }>
> = {
  raralabs: {
    src: raraLabsPhoto,
    alt: "Rara Labs team photo",
    objectPosition: "42% 58%",
  },
  codavatar: { src: codavatarVisual, alt: "Developer workspace" },
  promoty: { src: promotyVisual, alt: "Promoty team photo" },
  houzz: { src: houzzPhoto, alt: "Houzz team outing" },
  logicurv: { src: logicurvVisual, alt: "Basiyo booking platform" },
};

const logoColors: Record<string, string> = {
  houzz: "#50b010",
  raralabs: "#f04070",
  codavatar: "#d00000",
  promoty: "#f090e0",
  logicurv: "#305070",
};

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
        <img className="connector-arrow" src={Line3SVG} alt="" width={120} />
      </Flex>
      <div className="timeline">
        {experience.map((job, index) => {
          const reverse = index % 2 === 1;
          const connectorLine = index % 2 === 0 ? line4 : line5;
          const visual = visuals[job.logo];

          return (
            <Fragment key={job.company}>
              <article
                className={`timeline-item${reverse ? " timeline-item--reverse" : ""}`}
                style={
                  {
                    "--item-index": index,
                    "--item-accent": logoColors[job.logo],
                  } as CSSProperties
                }
              >
                <div
                  className={`timeline-visual${visual ? " timeline-visual--photo" : ""}`}
                  aria-hidden={visual ? undefined : true}
                >
                  {visual ? (
                    <img
                      className="timeline-visual-photo"
                      src={visual.src}
                      alt={visual.alt}
                      style={
                        visual.objectPosition
                          ? { objectPosition: visual.objectPosition }
                          : undefined
                      }
                    />
                  ) : (
                    <span className="timeline-visual-mark">
                      {job.company[0]}
                    </span>
                  )}
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
                  <img className="connector-arrow" src={connectorLine} alt="" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </Section>
  );
}
