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
//   const { setCursorVariant, setIsHovering } = useContext(MouseTrailContext);
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
            // setCursorVariant("large");
            // setIsHovering(true);
          }}
          onMouseLeave={() => {
            timeoutId = setTimeout(() => {
            //   setCursorVariant("default");
            //   setIsHovering(false);
            }, 150); // Add this line
          }}
        >
            <h2>Full Stack Developer</h2>
            <p>
            4+ years in software development, MS in Software Engineering. Specialized in building scalable, secure systems that enhance operations and user experience.
            </p>
            <p>
            <strong>Key Experiences:</strong>
            <ul>
            <li>KeelWorks Foundation: Developed Node.js server for volunteer management platform (500+ users)</li>
            <li>HealthEdge Software, Inc.: Created Spring Boot microservices for patient claims processing</li>
            <li>Hindustan Aeronautics Limited: Engineered data analysis for airfoil blade machining</li>
            </ul>
            </p>
            <p>
            <strong>Tech Stack:</strong> JavaScript, TypeScript, React, Angular, Java, Spring Boot, AWS
            </p>
            <p>
            Turning caffeine into code since 2019. Let's build something great together.
            </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");


