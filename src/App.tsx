import "./App.css";
import { Box } from "@radix-ui/themes";
import Intro from "./components/Intro.tsx";
import Skills from "./components/Skills.tsx";
import Journey from "./components/Journey.tsx";
import School from "./components/School.tsx";
import Footer from "./components/Footer.tsx";
import Employment from "./components/Employment.tsx";

function App() {
  return (
    <>
      <Box>
        <Intro />
        <Skills />
        <Journey />
        <School />
        <Employment />
      </Box>
      <Footer />
    </>
  );
}

export default App;
