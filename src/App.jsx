import About from "./pages/About";
import Career from "./pages/Career";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import ScrollLine from "./components/ScrollLine";
import "./styles/style.scss";

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
