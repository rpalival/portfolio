import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { throttle } from 'lodash';
import MouseTrailContext from './MouseTrailContext';


const Navbar = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  
  const { setIsVisible } = useContext(MouseTrailContext);

  const [mousePosition1, setMousePosition1] = useState({ x: 0, y: 0 });
  const [mousePosition2, setMousePosition2] = useState({ x: 0, y: 0 });
  const [mousePosition3, setMousePosition3] = useState({ x: 0, y: 0 });


  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event) => {
    setIsHovered(true);
    setIsVisible(false);
  };

  const handleMouseEnterForH1 = event => {  
    let iteration = 0;
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseEnterCombined = event => {
    handleMouseEnter(event);
    handleMouseEnterForH1(event);
  }

  const handleMouseMove1 = throttle((event) => {
    if (isHovered) {
      const { clientX, clientY } = event;
      const { left, top, width, height } = event.target.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const diffX = clientX - centerX;
      const diffY = clientY - centerY;
    
      setMousePosition1({ x: (diffX / 2) + 5, y: (diffY / 2) });
    }
  }, 16.7); //best value for 60hz display
  const handleMouseMove2 = throttle((event) => {
    if (isHovered) {
      const { clientX, clientY } = event;
      const { left, top, width, height } = event.target.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const diffX = clientX - centerX;
      const diffY = clientY - centerY;
    
      setMousePosition2({ x: (diffX / 2) + 5, y: (diffY / 2) });
    }
  }, 16.7);
  const handleMouseMove3 = throttle((event) => {
    if (isHovered) {
      const { clientX, clientY } = event;
      const { left, top, width, height } = event.target.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const diffX = clientX - centerX;
      const diffY = clientY - centerY;
    
      setMousePosition3({ x: (diffX / 2) + 5, y: (diffY / 2) });
    }
  }, 16.7);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition1({ x: 0, y: 0 });
    setMousePosition2({ x: 0, y: 0 });
    setMousePosition3({ x: 0, y: 0 });
    setIsVisible(true);
  };

  return (
    <nav className="navbar flex justify-between items-center p-4 md:p-10 z-10">
      {/* My Name */}
      <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      <div className="flex items-center font-normal">
        <h1 
          onMouseEnter={handleMouseEnterCombined} 
          data-value="RAJ PALIVAL" 
          onMouseLeave={handleMouseLeave} 
          className="text-base font-black md:text-xl lg:text-3xl"
        >
          RAJ PALIVAL
        </h1>
      </div>

      <div className="flex text-xs md:text-xs lg:text-sm font-light">
        <Link to="/"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
        }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove1}
        onMouseLeave={handleMouseLeave}
        style={{ 
          WebkitTransform: `translate(${mousePosition1.x}px, ${mousePosition1.y}px)`,
          MozTransform: `translate(${mousePosition1.x}px, ${mousePosition1.y}px)`,
          transform: `translate(${mousePosition1.x}px, ${mousePosition1.y}px)`,
          WebkitTransition: 'transform 0.03s ease-in-out',
          MozTransition: 'transform 0.03s ease-in-out',
          transition: 'transform 0.03s ease-in-out'
        }}
        className="px-4 py-1 border border-white border-opacity-50 rounded-full ml-6 md:ml-16 mr-4 md:mr-16"><span>ALMA MATER PROJECTS</span></Link>

        <Link to="/"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove2}
        onMouseLeave={handleMouseLeave}
        style={{ 
          WebkitTransform: `translate(${mousePosition2.x}px, ${mousePosition2.y}px)`,
          MozTransform: `translate(${mousePosition2.x}px, ${mousePosition2.y}px)`,
          transform: `translate(${mousePosition2.x}px, ${mousePosition2.y}px)`,
          WebkitTransition: 'transform 0.03s ease-in-out',
          MozTransition: 'transform 0.03s ease-in-out',
          transition: 'transform 0.03s ease-in-out'
        }}
        className="px-4 py-1 border border-white border-opacity-50 rounded-full "><span>ABOUT</span></Link>
      </div>

      {/* contact button */}
      <div>
        <Link
          to="/"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove3}
          onMouseLeave={handleMouseLeave}
          // style={}
          className="px-5 py-1 border border-white rounded-full bg-transparent text-white text-xs md:text-xs lg:text-sm font-light relative z-10 overflow-hidden whitespace-nowrap flex-nowrap border-opacity-50 md:block hidden transition-all duration-100 ease-in-out"
          style={
            { 
              width: '100%',
              maxWidth: '20.7rem',
              height: '2rem', 
              lineHeight: '1.3rem',
              WebkitTransform: `translate(${mousePosition3.x}px, ${mousePosition3.y}px)`,
              MozTransform: `translate(${mousePosition3.x}px, ${mousePosition3.y}px)`,
              transform: `translate(${mousePosition3.x}px, ${mousePosition3.y}px)`,
              WebkitTransition: 'transform 0.03s ease-in-out',
              MozTransition: 'transform 0.03s ease-in-out',
              transition: 'transform 0.03s ease-in-out'
            }
          }>
          <span className="px-1 relative top-100 w-full h-full bg-transparent text-white transition-all duration-100 ease-in-out transform translate-y-0">
            AVAILABLE FOR INTERNSHIP
          </span>
          <span className="px-4 absolute top-100 w-full h-full bg-white text-black transition-all duration-100 ease-in-out transform translate-y-full">
          AVAILABLE FOR FULL-TIME
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;