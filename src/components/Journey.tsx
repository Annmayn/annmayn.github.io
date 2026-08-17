import { Box, Flex, Heading, Section, Text } from "@radix-ui/themes";
import Line2SVG from "../assets/line2.svg";
import sparkle from "../assets/sparkle.svg";
import { journey, profile } from "../data/portfolio";

export default function Journey() {
  return (
    <Section aria-labelledby="journey-title" size="1">
      <Heading as="h2" id="journey-title" className="section-title">
        <span className="section-title-sparkles">
          My engineering journey
          <img className="section-title-sparkle" src={sparkle} alt="" />
        </span>
      </Heading>
      <Text
        as="p"
        className="muted"
        style={{
          marginTop: "-0.25rem",
          marginBottom: "1.25rem",
          maxWidth: "40rem",
        }}
      >
        {profile.about}
      </Text>
      <div className="journey-path">
        {journey.map((step, index) => (
          <Box asChild key={step.text}>
            <article
              className={`journey-card ${index % 2 === 0 ? "journey-card--start" : "journey-card--end"}`}
              style={{ gridRow: index + 1 }}
            >
              <Text as="p">{step.text}</Text>
            </article>
          </Box>
        ))}
        <Flex
          className="connector journey-connector"
          justify="center"
          style={{ gridRow: `1 / ${journey.length + 1}` }}
        >
          <img className="connector-arrow" src={Line2SVG} alt="" width={100} />
        </Flex>
      </div>
    </Section>
  );
}
