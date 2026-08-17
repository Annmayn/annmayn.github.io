import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Strong,
  Text,
} from "@radix-ui/themes";
import { languages, scores, profile } from "../data/portfolio";
import WelcomeSVG from "../assets/welcomeLine.svg";

export default function Footer() {
  return (
    <Flex asChild direction="column" align="center" gap="5">
      <footer className="footer">
        <Section aria-labelledby="languages-title" size="1" width="100%">
          <Text as="p" className="section-label">
            Languages & scores
          </Text>
          <Heading
            as="h2"
            id="languages-title"
            className="section-title"
            style={{ fontSize: "1.6rem" }}
          >
            Beyond code
          </Heading>
          <Grid
            className="lang-grid"
            columns={{ initial: "1", sm: "2", md: "4" }}
            gap="3"
          >
            {languages.map((lang) => (
              <Box key={lang.name} className="lang-item">
                <Strong>{lang.name}</Strong>
                <Text as="span">{lang.level}</Text>
              </Box>
            ))}
            {scores.map((score) => (
              <Box key={score.name} className="lang-item">
                <Strong>
                  {score.name} · {score.score}
                </Strong>
                <Text as="span">{score.date}</Text>
              </Box>
            ))}
          </Grid>
        </Section>

        <img width={200} src={WelcomeSVG} alt="" />
        <Flex className="footer-links" wrap="wrap" gap="4" justify="center">
          <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
          <Link href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
        </Flex>
        <Text
          as="p"
          className="muted"
          style={{ margin: 0, fontSize: "0.85rem" }}
        >
          Made with 🩵 in React
        </Text>
      </footer>
    </Flex>
  );
}
