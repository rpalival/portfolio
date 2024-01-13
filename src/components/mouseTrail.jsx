import React, { useEffect, useRef, useContext, useState } from 'react';
import { throttle } from 'lodash';
import MouseTrailContext from './MouseTrailContext';
import { motion } from 'framer-motion';

const baseColors = [
    'rgba(255, 255, 255, 0.8)',
];

const colors = Array(39).fill(baseColors).flat().slice(0, 39);

const MouseTrail = () => {
    const { isVisible, cursorVariant, isHovering } = useContext(MouseTrailContext);
    const coords = useRef({x: 0, y: 0});
    const circlesRef = useRef([]);

    

    useEffect(() => {
        const handleMouseMove = throttle((e) => {
            coords.current = { x: e.clientX, y: e.clientY };
             // Adjust the size of the circlesRef.current array based on the cursorVariant
             if (cursorVariant === 'text' || cursorVariant === 'large') {
                // Hide all circles except the first one
                circlesRef.current.forEach((circle, index) => {
                    if (circle && index !== 0) {
                        circle.style.display = 'none';
                    }
                });
            } else {
                // Show all circles
                circlesRef.current.forEach(circle => {
                    if (circle) {
                        circle.style.display = 'block';
                    }
                });
            
                // If there are less than 39 circles, add more until there are 39
                while (circlesRef.current.length < 39) {
                    const newCircle = document.createElement('div');
                    newCircle.className = 'circle'; // Add the class name for the circle
                    newCircle.style.left = `${coords.current.x}px`; // Set the initial position of the circle
                    newCircle.style.top = `${coords.current.y}px`; // Set the initial position of the circle
                    document.body.appendChild(newCircle); // Append the circle to the DOM
                    circlesRef.current.push(newCircle);
                }
            }
        }, 5);

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [cursorVariant]);

    const variants = {
        default: {
            height: '24px',
            width: '24px',
          },
          text: {
            height: '180px',
            width: '180px',
            backgroundColor: 'rgba(255, 255, 255 )',
            mixBlendMode: 'difference',
          },
          large: {
            height: '260px',
            width: '260px',
            backgroundColor: 'rgba(255, 255, 255 )',
            mixBlendMode: 'difference',
          }
    }

    const cursorVariantRef = useRef(cursorVariant);

    useEffect(() => {
        const animateCircles = () => {
            let x = coords.current.x;
            let y = coords.current.y;

            circlesRef.current.forEach((circle, index) => {
                if (!circle) return;

                // Update the stored position for the circle
                circle.x = x;
                circle.y = y;

                // Apply the transformation to the circle

                let offset;
                if (cursorVariantRef.current === 'text') {
                offset = 90;
                } else if (cursorVariantRef.current === 'large') {
                offset = 130; // Adjust this value as needed
                } else {
                offset = 12;
                }
                circle.style.left = `${x - offset}px`;
                circle.style.top = `${y - offset}px`;
                circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

                // Calculate the next position based on the next circle in the array or the first one
                const nextIndex = index + 1 === circlesRef.current.length ? 0 : index + 1;
                const nextCircle = circlesRef.current[nextIndex];
                x += (nextCircle.x - x) * 0.4;
                y += (nextCircle.y - y) * 0.4;
            });

            requestAnimationFrame(animateCircles);
        };

        animateCircles();
    }, []);

    useEffect(() => {
        cursorVariantRef.current = cursorVariant; // Update cursorVariantRef when cursorVariant changes
    }, [cursorVariant]);

    return (
        isVisible && (
            <div>
                {colors.map((color, index) => (
                    <motion.div
                        variants={variants}
                        animate={cursorVariant}
                        key={index} 
                        className="circle" 
                        ref={(el) => {
                            circlesRef.current[index] = el;
                            if (el) {
                                el.x = coords.current.x; // Initialize x position
                                el.y = coords.current.y; // Initialize y position
                            }
                        }}
                        style={{ 
                            position: 'fixed',
                            borderRadius: '50%',
                            backgroundColor: color,
                        }}
                    />
                ))}
            </div>
        )
    );
};

export default MouseTrail;
