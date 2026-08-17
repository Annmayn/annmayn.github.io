import { Box, Flex, Heading, Section, Text } from "@radix-ui/themes";
import Line1SVG from "../assets/line1.svg";
import { skills } from "../data/portfolio";

const skillBorderGradient =
  "linear-gradient(135deg, #a981fe, #dba6f4, #fbae96)";
const skillTextGradient = "linear-gradient(90deg, #7ec8ff, #b8fe81, #f6e27a)";

export default function Skills() {
  return (
    <Section aria-labelledby="skills-title" size="1">
      <Flex direction="column" align="center" gap="5">
        <Heading as="h2" id="skills-title" size="7" weight="bold">
          Skills
        </Heading>
        <Flex justify="center" wrap="wrap" gapX="5" gapY="3">
          {skills.map((skill) => (
            <Box
              key={skill}
              px="4"
              py="2"
              style={{
                border: "1px solid transparent",
                borderRadius: "var(--radius-6)",
                background: `linear-gradient(var(--bg), var(--bg)) padding-box, ${skillBorderGradient} border-box`,
              }}
            >
              <Text
                style={{
                  backgroundImage: skillTextGradient,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {skill}
              </Text>
            </Box>
          ))}
        </Flex>
        <img
          className="connector-arrow"
          style={{ marginTop: "12px", marginBottom: "36px" }}
          width={100}
          src={Line1SVG}
          alt="Skill to Journey Arrow"
        />
      </Flex>
    </Section>
  );
}
