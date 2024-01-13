import React, { useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import MouseTrailContext from './MouseTrailContext';

const Contact = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { setIsVisible } = useContext(MouseTrailContext);

  const handleMouseEnter = (event) => {
    setIsHovered(true);
    setIsVisible(false);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVisible(true);
  };

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      alert('Please enter your name.');
      return;
    }

    if (!form.email.trim()) {
      alert('Please enter your emailID.');
      return;
    }
  
    // Check if message field is empty
    if (!form.message.trim()) {
      alert('Please enter a message.');
      return;
    }

    if (!emailRegex.test(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Raj Palival',
        from_email: form.email,
        to_email: 'rajpalival21@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
       initial={false}
       animate={isMounted ? { x: 0, opacity: 1 } : {}}
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] p-8 rounded-2xl'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} // 50% transparent black
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='inputArea py-4 px-6 placeholder:text-black text-black rounded-3xl outline-none border-none font-medium'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4'>Your email</span>
            <input
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email address?"
              className='inputArea py-4 px-6 placeholder:text-black text-black rounded-3xl outline-none border-none font-medium'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email Content</span>
            <textarea
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Let's Talk, Text me anything!"
              className='inputArea py-4 px-6 placeholder:text-black text-black rounded-3xl outline-none border-none font-medium'
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}

            />
          </label>

          <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            type='submit'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
            className='bg-white inputArea py-3 px-8 rounded-3xl outline-none w-fit text-black font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    <div className='border border-opacity-10 p-2 flex justify-center space-x-8 mt-20 font-lightBold text-[20px] rounded-2xl bg-[rgba(0,0,0,0.1)] backdrop-blur-md'>
      <span>Feel free to follow me on socials </span>
      <span></span>
      <span></span>     
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span>Email ID: rajpalival21@gmail.com</span>
      <span>|</span>
      <span>Mobile No: +1 (201) 673-2185</span> 
    </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");