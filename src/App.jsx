import React, { Suspense } from "react";
import "./styles/style.scss";
import "./styles/loader.scss";

const Fallback = () => (
  <div className="loader">
    <span>Loading</span>
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
);

const About = React.lazy(() => import("./pages/About"));
const Nav = React.lazy(() => import("./components/Nav"));
const Career = React.lazy(() => import("./pages/Career"));
const Skill = React.lazy(() => import("./pages/Skill"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Nav />
      <div className="page">
        <About />
        <Career />
        <Skill />
        <Project />
      </div>
    </Suspense>
  );
}

export default App;
