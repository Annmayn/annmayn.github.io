import { useRef } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Section,
  Text,
} from "@radix-ui/themes";
import AiCert from "../assets/certifications/ai.png";
import CnnCert from "../assets/certifications/cnn.png";
import DddCert from "../assets/certifications/ddd.png";
import DlsCert from "../assets/certifications/dls.png";
import IntroToMlCert from "../assets/certifications/introToML.png";
import NnAndDlCert from "../assets/certifications/NNandDL.png";
import ProblemSolvingCert from "../assets/certifications/problemSolving.png";
import ReactiveMicroServiceCert from "../assets/certifications/reactiveMicroservice.png";
import ReactiveSystemCert from "../assets/certifications/reactiveSystems.png";
import SentimentAnalysisCert from "../assets/certifications/sentimentAnalysis.png";
import SequenceModelCert from "../assets/certifications/sequenceModel.png";
import StructureMlProjectCert from "../assets/certifications/structuringMLProjects.png";
import TuningCert from "../assets/certifications/tuning.png";
import CertificateDetail from "./CertificateDetail";

const gallery = [
  { src: AiCert, name: "Artificial Intelligence" },
  { src: CnnCert, name: "Convolutional Neural Networks" },
  { src: DddCert, name: "Domain Driven Design" },
  { src: DlsCert, name: "Deep Learning Specialization" },
  { src: IntroToMlCert, name: "Intro to Machine Learning" },
  { src: NnAndDlCert, name: "Neural Networks and Deep Learning" },
  { src: ProblemSolvingCert, name: "Problem Solving" },
  { src: ReactiveMicroServiceCert, name: "Reactive Microservice" },
  { src: ReactiveSystemCert, name: "Reactive Systems" },
  { src: SentimentAnalysisCert, name: "Sentiment Analysis" },
  { src: SequenceModelCert, name: "Sequence Models" },
  { src: StructureMlProjectCert, name: "Structuring ML Projects" },
  { src: TuningCert, name: "Hyperparameter Tuning" },
];

export default function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <Section aria-labelledby="certs-title" size="1">
      <Text as="p" className="section-label">
        Credentials
      </Text>
      <Heading as="h2" id="certs-title" className="section-title">
        Certificates
      </Heading>
      <Text
        as="p"
        className="muted"
        style={{ marginTop: "-0.35rem", marginBottom: "1.25rem" }}
      >
        Certificates gathered over the years — ML, AI, and problem solving.
      </Text>

      <Grid
        className="cert-rail"
        columns="40px 1fr 40px"
        gap="2"
        align="center"
      >
        <IconButton
          className="cert-nav"
          type="button"
          variant="outline"
          aria-label="Scroll left"
          onClick={() => scroll("left")}
        >
          ‹
        </IconButton>
        <Flex className="cert-track" ref={trackRef} gap="3">
          {gallery.map((certificate) => (
            <Box key={certificate.name} className="cert-card">
              <CertificateDetail
                src={certificate.src}
                name={certificate.name}
              />
            </Box>
          ))}
        </Flex>
        <IconButton
          className="cert-nav"
          type="button"
          variant="outline"
          aria-label="Scroll right"
          onClick={() => scroll("right")}
        >
          ›
        </IconButton>
      </Grid>
    </Section>
  );
}
