import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import Line3SVG from "../assets/line3.svg";
import StraightLineSVG from "../assets/straightLine.svg";
import DottedStraightLineSVG from "../assets/dashedStraightLine.svg";
import RaraSVG from "../assets/raralabs_logo.jpg";
import BasiyoSVG from "../assets/basiyo_logo.png";
import CodavatarSVG from "../assets/codavatar_logo.jpg";
import PromotySVG from "../assets/promoty_logo.jpg";
import CompanyHistory from "./CompanyHistory.tsx";

export default function Employment() {
  return (
    <Flex direction={"column"} align={"center"} gapY={"4"}>
      <Grid columns={"2"} my={"5"}>
        <Text>
          I secured an AI Fellowship at Fusemachines, where I had the chance to
          learn more about the foundation for AI, alongside a certificate from
          Columbia University
        </Text>
        <img
          style={{ marginTop: "12px", marginBottom: "36px" }}
          width={"100px"}
          src={Line3SVG}
          alt={"Skill to Journey Arrow"}
        />
      </Grid>

      <CompanyHistory
        name={"Rara Labs"}
        from={"September, 2019"}
        to={"June, 2021"}
        logo={RaraSVG}
        textFirst
      />

      <img src={StraightLineSVG} alt="Straight Line" />
      <CompanyHistory
        name={"Codavatar"}
        from={"September, 2019"}
        to={"June, 2021"}
        textFirst={false}
        logo={CodavatarSVG}
      />

      <img src={StraightLineSVG} alt="Straight Line" />
      <Grid columns={{ initial: "1", sm: "2" }} gapX={"6"}>
        <CompanyHistory
          name={"Promoty"}
          from={"September, 2019"}
          to={"June, 2021"}
          textFirst
          logo={PromotySVG}
        />
        <Box justifySelf={"center"} display={{ initial: "block", sm: "none" }}>
          <img src={DottedStraightLineSVG} alt="Straight Line" />
        </Box>
        <CompanyHistory
          name={"Basiyo"}
          from={"September, 2019"}
          to={"June, 2021"}
          textFirst
          logo={BasiyoSVG}
        />
      </Grid>

      {/*Houzz*/}
      <img src={StraightLineSVG} alt="Straight Line" />
      <CompanyHistory
        name={"Houzz"}
        from={"September, 2019"}
        to={"June, 2021"}
        textFirst={false}
      />
    </Flex>
  );
}
