import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Line2SVG from "../assets/line2.svg";

export default function Journey() {
  return (
    <Flex direction={"column"} align={"center"}>
      <Heading size={"7"} weight={"bold"}>
        My Software Journey
      </Heading>
      <Grid columns={"3"} my={"5"}>
        <Text>I started my career studying computer engineering at IOE</Text>
        <img
          style={{ marginTop: "12px", marginBottom: "36px" }}
          width={"100px"}
          src={Line2SVG}
          alt={"Skill to Journey Arrow"}
        />
        <Text>I did HackerRank</Text>
      </Grid>
    </Flex>
  );
}
