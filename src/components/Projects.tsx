import { Grid, Heading, Link, Section, Text } from "@radix-ui/themes";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <Section aria-labelledby="projects-title" size="1">
      <Text as="p" className="section-label">
        Build
      </Text>
      <Heading as="h2" id="projects-title" className="section-title">
        <Text as="span" className="gradient-text">
          Projects
        </Text>
      </Heading>
      <Grid
        className="project-grid"
        columns={{ initial: "1", sm: "2" }}
        gap="3"
      >
        {projects.map((project) => (
          <Link
            key={project.name}
            className="project-card"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            <Text as="span" className="year">
              {project.year}
            </Text>
            <Heading as="h3" size="3">
              {project.name}
            </Heading>
            <Text as="p">{project.description}</Text>
          </Link>
        ))}
      </Grid>
    </Section>
  );
}
