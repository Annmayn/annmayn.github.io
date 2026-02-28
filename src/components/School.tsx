import { Flex, Grid, Text } from "@radix-ui/themes";

export default function School() {
  return (
    <Grid columns={"2"}>
      <Text>School Image</Text>
      <Flex direction={"column"}>
        <Text size={"5"}>IOE</Text>
        <Text size={"3"}>2015-2019</Text>
        <Text>
          I did my undergrad in Computer Engineering from IOE, Tribhuvan
          University
        </Text>
        <Text>It is THE hardest engineering school to get into in Nepal</Text>
      </Flex>
    </Grid>
  );
}
