import About from "./componenet/About";
import Contact from "./componenet/Contact";
import TechStacks from "./componenet/Techstacks";
import Home from "./componenet/Home";
import MainContact from "./componenet/MainContact";
import Navbar from "./componenet/Navbar";
import SocialLinks from "./componenet/SocialLinks";
import Projects from "./componenet/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <TechStacks />
      <Contact />
      <SocialLinks />
      {/* <MainContact /> */}
    </div>
  );
}

export default App;
