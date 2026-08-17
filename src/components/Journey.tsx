import { Box, Flex, Heading, Section, Text } from "@radix-ui/themes";
import Line2SVG from "../assets/line2.svg";
import { journey, profile } from "../data/portfolio";

export default function Journey() {
  return (
    <Section aria-labelledby="journey-title" size="1">
      <Text as="p" className="section-label">
        Path
      </Text>
      <Heading as="h2" id="journey-title" className="section-title">
        My engineering journey
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
      <Flex className="journey-grid" direction="column" gap="4">
        {journey.map((step) => (
          <Box asChild key={step.text}>
            <article className="journey-card">
              <Text as="p">{step.text}</Text>
            </article>
          </Box>
        ))}
      </Flex>
      <Flex className="connector" justify="center">
        <img className="connector-arrow" src={Line2SVG} alt="" width={100} />
      </Flex>
    </Section>
  );
}
