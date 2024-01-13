import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { useState } from "react";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  isBlurred,
  onMouseEnter,
  onMouseLeave,
}) => {
  return(
  <motion.div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={`bg-primary p-12 rounded-3xl xs:w-[280px] w-full h-auto card ${isBlurred ? 'blur' : ''}`}
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span>@</span> {name}
          </p>
          <p className='mt-1 text-white text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
  );
};

const Feedbacks = () => {
  const [activeCard, setActiveCard] = useState(null);
  return (
    <div className={`w-full rounded-[10px]`}>
      <div
        className={`bg-black rounded-3xl ${styles.padding} min-h-[600px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
        </motion.div>
        <div className={`mt-12 pb-4 ${styles.paddingX} flex flex-wrap justify-between gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
          key={testimonial.name} 
          index={index} 
          isBlurred={activeCard !== null && activeCard !== index}
          {...testimonial}
          onMouseEnter={() => setActiveCard(index)}
          onMouseLeave={() => setActiveCard(null)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");