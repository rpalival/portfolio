import React, { useEffect, useContext } from "react";
import MouseTrailContext from './MouseTrailContext';
import { motion } from "framer-motion";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  const { setCursorVariant, setIsHovering } = useContext(MouseTrailContext);
  let timeoutId = null;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Split the text
    const typeSplit = new SplitType(".split-word", { types: "lines, words" });

    // Add line-mask to each word
    document.querySelectorAll(".word").forEach(word => {
      const mask = document.createElement("div");
      mask.className = "line-mask";
      word.appendChild(mask);
    });

    // Animation
    const allMasks = [...document.querySelectorAll(".line-mask")];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".split-word",
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1.5
      }
    });

    tl.to(allMasks, {
      width: "0%",
      duration: 1,
      stagger: 0.5
    });
  }, []);

  

  return (
    <div>
      <div>
        <motion.div mt-4 variants={textVariant()}>
          <p className={styles.sectionSubText}>About Me</p>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-12 text-white text-[37px] max-w-6xl leading-[60px] font-normal split-word'
          onMouseEnter={() => {
            clearTimeout(timeoutId);
            setCursorVariant("large");
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            timeoutId = setTimeout(() => {
              setCursorVariant("default");
              setIsHovering(false);
            }, 150); // Add this line
          }}
        >
          <p
          >
            "Hi, I'm Raj Palival, based in New Jersey, USA. I am an upcoming Graduate in MS. Software Engineering from Stevens Institute of Technology
            (May 2024). I craft code with flair and a dash of JavaScript magic. Off-screen, I'm
            either tinkering with new tech or deciphering Elon Musk's posts. I'm a
            work in progress, just like my code - always evolving and iterating. 
            My goal? Passionate to simplify technology and empower users, also aiming to shout 'King of the world' from atop the Empire State Building."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");


