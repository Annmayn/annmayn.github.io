import { Box, Flex, Text } from "@radix-ui/themes";
import WelcomeSVG from "../assets/welcomeLine.svg";

export default function Intro() {
  return (
    <Box>
      <Flex
        direction={"column"}
        align={"center"}
        gapY={"5"}
        mt={{ initial: "50%", md: "0%" }}
      >
        <Text size={"7"} weight={"bold"}>
          Hi, I'm Neema.
        </Text>
        <Text size={"7"} weight={"bold"}>
          A Software Engineer.
        </Text>
        <img
          style={{ marginTop: "12px", marginBottom: "36px" }}
          height={"50px"}
          src={WelcomeSVG}
          alt={"Welcome Line Separator"}
        />
      </Flex>
    </Box>
  );
}
