import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Line1SVG from "../assets/line1.svg";

export default function Skills() {
  const skills = [
    "Python",
    "Javascript",
    "Typescript",
    "Kotlin",
    "Data Structures & Algorithm",
    "PostgreSQL",
    "Django",
    "FastApi",
    "React",
  ];
  return (
    <Box>
      <Flex direction={"column"} align={"center"} gapY={"5"}>
        <Heading size={"7"} weight={"bold"}>
          Skills
        </Heading>
        <Flex
          justify={"center"}
          direction={"row"}
          wrap={"wrap"}
          gapX={"5"}
          gapY={"3"}
        >
          {skills.map((skill) => (
            <Box
              p={"2"}
              style={{
                border: "1px solid",
                borderImage:
                  "linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b) 1",
                borderRadius: "var(--radius-6)",
              }}
            >
              <Text>{skill}</Text>
            </Box>
          ))}
        </Flex>
        <img
          style={{ marginTop: "12px", marginBottom: "36px" }}
          width={"100px"}
          src={Line1SVG}
          alt={"Skill to Journey Arrow"}
        />
      </Flex>
    </Box>
  );
}
