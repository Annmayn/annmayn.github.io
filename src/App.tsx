import "./App.css";
import { Box, Flex, Text } from "@radix-ui/themes";
import Intro from "./components/Intro.tsx";
import Skills from "./components/Skills.tsx";
import Journey from "./components/Journey.tsx";
import School from "./components/School.tsx";
import Footer from "./components/Footer.tsx";
import Employment from "./components/Employment.tsx";
import Certifications from "./components/Certifications.tsx";

function App() {
  const isProd = import.meta.env.PROD;

  return isProd ? (
    <Flex
      justify={"center"}
      align={"center"}
      height={"90vh"}
      direction={"column"}
    >
      <Text>Under Construction</Text>
    </Flex>
  ) : (
    <>
      <Box p={"5"}>
        <Intro />
        <Skills />
        <Journey />
        <School />
        <Certifications />
        <Employment />
      </Box>
      <Footer />
    </>
  );
}

export default App;
