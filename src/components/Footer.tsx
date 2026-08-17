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

const iconProps = {
  className: "footer-link-icon",
  "aria-hidden": true as const,
};

function MailIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.5 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.537H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a-2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.434v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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

        <img className="connector-arrow" width={200} src={WelcomeSVG} alt="" />
        <Flex className="footer-links" wrap="wrap" gap="4" justify="center">
          <Link href={`mailto:${profile.email}`}>
            <MailIcon />
            {profile.email}
          </Link>
          <Link href={profile.github} target="_blank" rel="noreferrer">
            <GitHubIcon />
            GitHub
          </Link>
          <Link href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon />
            LinkedIn
          </Link>
        </Flex>
        <Flex direction="column" align="center" gap="1">
          <Text
            as="p"
            className="muted"
            style={{ margin: 0, fontSize: "0.85rem" }}
          >
            Made with{" "}
            <span className="heart-pulse" aria-hidden="true">
              🩵
            </span>{" "}
            in React
          </Text>
          <Text
            as="p"
            className="muted"
            style={{ margin: 0, fontSize: "0.85rem" }}
          >
            Design inspired by{" "}
            <Link
              href="https://www.figma.com/design/RKpttwSF2FtZ45BnP5TMCo/Portfolio-Template--Community-?node-id=0-1"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio Template
            </Link>{" "}
            on Figma Community
          </Text>
        </Flex>
      </footer>
    </Flex>
  );
}
