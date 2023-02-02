import "../src/style.scss";
import About from "./components/About";
import Career from "./components/Career";
import Project from "./components/Project";
import Skill from "./components/Skill";
import ScrollLine from "./components/ScrollLine";

function App() {
  return (
    <div className="main">
      <ScrollLine />
      <div className="page">
        <About />
        <Career />
        <Skill />
        <Project />
      </div>
    </div>
  );
}

export default App;