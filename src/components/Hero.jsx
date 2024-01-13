import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import MouseTrailContext from './MouseTrailContext';
import React, { useContext } from 'react';
// import { SectionWrapper } from "../hoc";


const Hero = () => {
  const { setCursorVariant, setIsHovering } = useContext(MouseTrailContext);
  let timeoutId = null; // Add this line

  return (
    <section className='relative h-screen mx-auto overflow-hidden'>
      {/* Text container */}
      <div className=' absolute top-[40px] w-full text-center z-10'>
        
        <p className={`${styles.heroSubText} text-white text-shadow: 0 0 5px white`}>
          <span
            onMouseEnter={() => {
              clearTimeout(timeoutId);
              setCursorVariant("text");
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              timeoutId = setTimeout(() => {
                setCursorVariant("default");
                setIsHovering(false);
              }, 150);
            }}
          >
            At the Intersection of Academia & Industry, Dive into a World <br></br> of Code 
            Crafted by a Stevens Software Engineering Grad.
          </span>
        </p>
        {/* Aurora effect */}
      </div>
      {/* Canvas container */}
      <div className='absolute inset-0'>
        <ComputersCanvas />
      </div>
    </section>
  )
}
export default Hero;
