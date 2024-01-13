import React, { useState, useContext } from 'react';
import { socialMedia } from '../constants';
import MouseTrailContext from './MouseTrailContext';


const SocialMediaLinks = () => {
  const { setIsVisible } = useContext(MouseTrailContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event) => {
    setIsHovered(true);
    setIsVisible(false);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVisible(true);
  };

  return (
    <div
     className="social-media-links" 
    >
      {socialMedia.map((media, index) => (
        <a
         key={index} 
         href={media.link} 
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         target="_blank" 
         rel="noopener noreferrer" 
         className="social-icon"
         >
          <img src={media.icon} alt={media.name}/>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;