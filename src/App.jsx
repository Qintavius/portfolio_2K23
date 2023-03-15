import React, { Suspense } from "react";
import "./styles/style.scss";
import "./styles/loader.scss";
import About from "./pages/About";
import Langage from "./components/Langage";
import Social from "./components/Social";

const Fallback = () => (
  <div className="loader">
    <span>Loading</span>
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
);

const Nav = React.lazy(() => import("./components/Nav"));
const Career = React.lazy(() => import("./pages/Career"));
const Skill = React.lazy(() => import("./pages/Skill"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  return (
    <div className="App">
      <About />
      <Langage />
      <Social />
      <Suspense fallback={<Fallback />}>
        <Nav />
        <Career />
        <Skill />
        <Project />
      </Suspense>
    </div>
  );
}

export default App;