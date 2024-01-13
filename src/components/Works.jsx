import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const TiltCard = ({ 
  name,
  description,
  tags,
  image,
  source_code_link, 
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-2xl bg-gradient-to-br from-white to-orange"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Add this line
        }}
        className="flex flex-col justify-between absolute inset-5 rounded-2xl bg-white shadow-lg"
      >
        <div className='relative w-full h-[150px]'
        onClick={() =>{
          console.log('Clicked!');
          window.open(source_code_link, "_blank");
        }}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-2 flex flex-col'>
          <p className='text-black font-normal text-[24px] mt-1 ml-2'>{name}</p>
          <p className=' text-black text-[15px] mt-1 m-2'>{description}</p>
          <div className='flex flex-wrap gap-3 mt-2 ml-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[16px]  mb-2 ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionSubText}`}>Academic Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-10 text-justify text-white text-[22px] max-w-7xl leading-[35px]'
        >
        I've curated below a selection of my academic projects, my very own digital offsprings
        demonstrating my knack for grasping requirements, solving complex problems, and
        juggling various tech tools. Attached with github repository links, click on the github icon
        for a sneak peek into my academic journey and tech escapades. Dive into my world of digital adventures. 🚀👨‍💻🌟
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-between gap-20'>
        {projects.map((project, index) => (
          <TiltCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");