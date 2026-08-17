import "./App.css";
import { Box, Container } from "@radix-ui/themes";
import Intro from "./components/Intro.tsx";
import Skills from "./components/Skills.tsx";
import Journey from "./components/Journey.tsx";
import School from "./components/School.tsx";
import Footer from "./components/Footer.tsx";
import Employment from "./components/Employment.tsx";
import Certifications from "./components/Certifications.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  return (
    <Box className="portfolio-frame">
      <Box className="portfolio-inner">
        <Container className="app-shell" size="3">
          <Intro />
          <Skills />
          <Journey />
          <School />
          <Employment />
          <Projects />
          <Certifications />
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
