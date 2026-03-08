import { Flex, Grid, Text } from "@radix-ui/themes";
import { useRef } from "react";
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
import LeftArrow from "../assets/leftArrow.svg";
import RightArrow from "../assets/rightArrow.svg";
import Arrow from "./Arrow.tsx";
import CertificateDetail from "./CertificateDetail.tsx";
import ArrowSVG from "../assets/line9.svg";

export default function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const certificates = [
    { src: AiCert, name: "AI" },
    { src: CnnCert, name: "CNN" },
    { src: DddCert, name: "DDD" },
    { src: DlsCert, name: "Dls" },
    { src: IntroToMlCert, name: "IntroToMl" },
    { src: NnAndDlCert, name: "Nn" },
    { src: ProblemSolvingCert, name: "ProblemSolving" },
    { src: ReactiveMicroServiceCert, name: "Reactive Microservice" },
    { src: ReactiveSystemCert, name: "Reactive System" },
    { src: SentimentAnalysisCert, name: "Sentiment Analysis" },
    { src: SequenceModelCert, name: "Sequence Model" },
    { src: StructureMlProjectCert, name: "Structure ML Project" },
    { src: TuningCert, name: "Tuning ML Models" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 250;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Flex direction={"row"} my={"6"} justify={"center"}>
        <img src={ArrowSVG} alt={"Arrow"} width={"100px"} />
      </Flex>
      <Flex
        direction={{ initial: "column", sm: "row" }}
        justify={{ initial: "center", sm: "start" }}
        align={"center"}
      >
        <Text size={"5"} weight={"bold"}>
          Certificates I've gathered over the years
        </Text>
        <Grid
          maxWidth={{ initial: "80vw", sm: "50vw" }}
          justify={"center"}
          columns={"50px 1fr 50px"}
        >
          <Arrow
            src={LeftArrow}
            onClick={() => scroll("left")}
            alt={"Left Arrow"}
          />
          <Flex
            direction="row"
            ref={containerRef}
            overflowX={"auto"}
            gapX={{ initial: "0", sm: "2" }}
            style={{
              scrollbarWidth: "none",
            }}
          >
            {certificates.map((certificate) => (
              <CertificateDetail
                src={certificate.src}
                name={certificate.name}
              />
            ))}
          </Flex>
          <Arrow
            src={RightArrow}
            alt={"Right Arrow"}
            onClick={() => scroll("right")}
          />
        </Grid>
      </Flex>
    </>
  );
}
