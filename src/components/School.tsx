import {
  Box,
  Flex,
  Grid,
  Heading,
  Section,
  Strong,
  Text,
} from "@radix-ui/themes";
import { education } from "../data/portfolio";

export default function School() {
  return (
    <Section aria-labelledby="school-title" size="1">
      <Grid
        className="school-layout"
        columns={{ initial: "1", md: "2" }}
        gap="6"
        align="center"
      >
        <Flex className="school-visual" align="center" justify="center">
          <Box>
            <Strong>{education.school}</Strong>
            <Text as="span" className="muted">
              {education.years}
            </Text>
          </Box>
        </Flex>
        <Box>
          <Text as="p" className="section-label">
            Education
          </Text>
          <Heading as="h2" id="school-title" className="section-title">
            School
          </Heading>
          <Text as="p" className="muted" style={{ marginTop: 0 }}>
            {education.degree} · {education.years}
          </Text>
          <Flex className="school-notes" direction="column" gap="3">
            {education.notes.map((note) => (
              <Text as="p" key={note} className="school-note">
                {note}
              </Text>
            ))}
          </Flex>
        </Box>
      </Grid>
    </Section>
  );
}
