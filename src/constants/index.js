import {
  healthedge,
  project1,
  project2,
  project3
} from "../assets";
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Github from '../assets/github-sign.png';

const experiences = [
  {
    title: "Fico Blaze Advisor Developer",
    company_name: "Altruista Health, Inc. (now part of HealthEdge Software, Inc.)",
    icon: healthedge,
    iconBg: "#E6DEDD",
    date: " May 2021 - June 2022",
    points: [
      'GuidingCare Customization: Tailored platform features for U.S. healthcare clients, boosting client satisfaction and adoption rates',
      'FICO Blaze Integration: Enhanced GuidingCare with FICO Blaze, streamlining healthcare decision-making and patient care accuracy',
      'SRL Logic Development: Crafted and deployed complex SRL decision logic in FICO Blaze, automating essential processes in GuidingCare',
      'Rule Optimization: Refined FICO Blaze decision rules, increasing GuidingCare system efficiency by optimizing the codebase',
    ]
  },
];

const socialMedia = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rajpalival/",
    icon: linkedin, // You will download a LinkedIn icon and place it in your assets directory
  },
  {
    name: "GitHub",
    link: "https://github.com/rpalival",
    icon: Github, // You will download a GitHub icon and place it in your assets directory
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/raj.palival/",
    icon: instagram, // You will download an Instagram icon and place it in your assets directory
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Stevens ELC Lab",
    description:
    "Efficient lab booking and attendance tracking website for students and teachers of Steven's ELC Lab, built with Django and SQLite.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/rpalival/Django_Stevens_ELC_LAB_Website",
  },
  {
    name: "Web Forum",
    description:
    "Web forum API for user interactions and content management, tested with Postman and automated using Newman.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/rpalival/Python-Web-Forum-Backend",
  },
  {
    name: "OpenCV Architecture",
    description:
    "Comprehensive guide detailing OpenCV architecture, addressing system requirements for effective development.",
    tags: [
      {
        name: "openCV",
        color: "blue-text-gradient",
      },
      {
        name: "Overleaf Latex",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/rpalival/SSW565_final_project_OpenCV_Architecture/blob/main/Final_Project.pdf",
  },
];

export {socialMedia, experiences, testimonials, projects };
