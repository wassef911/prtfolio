import React from "react";
import { Switch, Route } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

import Spinner from "./Spinner";
import ErrorBoundary from "./ErrorBoundary";

import TEXT from "../utils/text";

const Introduction = React.lazy(() => import("./pages/Introduction"));
const About = React.lazy(() => import("./pages/About"));
const Showcase = React.lazy(() => import("./pages/Showcase"));
const Navigation = React.lazy(() => import("./menu/Navigation"));

const IntroductionPage = () => <Introduction prop={TEXT.introduction} />;
const AboutPage = () => <About prop={TEXT.about} />;
const ShowcasePage = () => <Showcase prop={TEXT.showcase} />;

function App() {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <React.Suspense fallback={<Spinner />}>
      <div id="outer-container" style={{ height: "100%" }}>
        <Navigation setOpen={setOpen} isOpen={isOpen} />
        <main id="page-wrap" className={isOpen ? "menuIsOpen mainSize" : null}>
          {/* all routing happens inside main */}
          <span onClick={() => setOpen(!isOpen)}>
            <Hamburger easing="ease-in" size={35} toggled={isOpen} />
          </span>
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={IntroductionPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/showcase" component={ShowcasePage} />
            </Switch>
          </ErrorBoundary>
        </main>
      </div>
    </React.Suspense>
  );
}

export default App;
