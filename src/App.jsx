// Desc: This is the main entry point for the application
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";
import SocialMediaLinks from "./components/SocialMediaLinks";
import MouseTrail from "./components/mouseTrail";
import MouseTrailContext from "./components/MouseTrailContext";
import React, { useState } from 'react';

const App = () => {
  //All these are for my custom cursor reactions on other components
  const [isVisible, setIsVisible] = useState(true);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isHovering, setIsHovering] = useState(false);

  return (
    <MouseTrailContext.Provider value={{ isVisible, setIsVisible, cursorVariant, setCursorVariant, isHovering, setIsHovering }}>
    <BrowserRouter>
      <MouseTrail />
      <div className='relative bg-primary'>
        <Navbar />
        <Hero />
        <SocialMediaLinks />
        <div>
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    </MouseTrailContext.Provider>
  );
}
export default App
