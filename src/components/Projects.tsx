import { Grid, Heading, Link, Section, Text } from "@radix-ui/themes";
import { projects } from "../data/portfolio";
import DeployRedirect from "./DeployRedirect";

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
      <Grid className="project-grid" columns="1" gap="3">
        {projects.map((project) => (
          <Link
            key={project.name}
            className="project-card"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Text as="span" className="year">
              {project.year}
            </Text>
            <Heading as="h3" size="3">
              {project.name}
            </Heading>
            <Text
              as="p"
              className={project.url ? "project-card-desc" : undefined}
            >
              <span>{project.description}</span>
              {project.url ? (
                <DeployRedirect url={project.url} className="project-live-demo">
                  Live demo
                </DeployRedirect>
              ) : null}
            </Text>
          </Link>
        ))}
      </Grid>
    </Section>
  );
}
