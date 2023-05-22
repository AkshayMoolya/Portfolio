import About from "./componenet/About";
import Contact from "./componenet/Contact";
import Experience from "./componenet/Experience";
import Home from "./componenet/Home";
import Navbar from "./componenet/Navbar";
import Portfolio from "./componenet/Portfolio";
import SocialLinks from "./componenet/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
