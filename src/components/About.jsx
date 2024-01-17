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
          className='mt-12 text-white text-[28px] max-w-6xl leading-[60px] font-normal split-word'
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
            "Hi, I'm Raj Palival, a graduate student based in New Jersey pursuing MS in Software Engineering at Stevens Institute of Technology, with an expected graduation in May 2024. Previously, I worked as a software developer at HealthEdge, focusing on creating business rules for guiding care.
            Driven by a fervor for continuous learning, I am dedicated to exploring new software stacks. Beyond academia and the professional realm, I am an enthusiast of chess, constantly adapting my strategy to overcome new challenges.
            My overarching goal is to simplify technology for everyday users, facilitating seamless integration and empowering individuals. With a commitment to making technology accessible, I aim to contribute to a future where adapting to new tech is effortless."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");


