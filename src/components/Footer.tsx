import { Flex, Text } from "@radix-ui/themes";
import FarewellSVG from "../assets/welcomeLine.svg";

export default function Footer() {
  return (
    <Flex direction={"column"} align={"center"} my={"9"} gapY={"5"}>
      <img width={"200"} src={FarewellSVG} alt="Farewell line" />
      <Text size={"2"}>Made with 🩵 in React</Text>
    </Flex>
  );
}
