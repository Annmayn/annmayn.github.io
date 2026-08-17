import { Avatar, Box, Flex, Text } from "@radix-ui/themes";
import WelcomeSVG from "../assets/welcomeLine.svg";
import avatar from "../assets/avatar.jpg";
import { profile } from "../data/portfolio";

const firstName = profile.name.split(" ")[0];

export default function Intro() {
  return (
    <Box>
      <Flex
        direction="column"
        align="center"
        gapY="5"
        mt={{ initial: "50%", md: "0%" }}
      >
        <Box
          p="1"
          style={{
            background: "linear-gradient(140deg, #a981fe, #7ec8ff, #b8fe81)",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <Avatar
            src={avatar}
            fallback={firstName[0]}
            alt={`${profile.name} profile`}
            size="8"
            radius="full"
          />
        </Box>
        <Text size="7" weight="bold">
          Hi, I'm {firstName}.
        </Text>
        <Text size="7" weight="bold">
          A {profile.title}.
        </Text>
        <img
          style={{ marginTop: "12px", marginBottom: "36px" }}
          height="50px"
          src={WelcomeSVG}
          alt="Welcome Line Separator"
        />
      </Flex>
    </Box>
  );
}
