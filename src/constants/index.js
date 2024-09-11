import {
    HAL,
  healthedge,
  keelworks,
  project1,
  project2,
  project3
} from "../assets";
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Github from '../assets/github-sign.png';

const experiences = [
    {
        title: "Software Developer",
        company_name: "KeelWorks Foundation",
        icon: keelworks,
        iconBg: "#E6DEDD",
        date: " July 2024 - Present",
        points: [
          'Designed and built an integrated Admin and HR dashboard for KeelHub, using React and Ant Design to streamline tasks, project status tracking, and volunteer onboarding resulting in a 120% increase in volunteer onboarding within first quarter.',
          'Strengthened the KeelHub application with robust role-based access control middleware, implementing Passport.js and JWT to protect sensitive Admin, HR and volunteer areas resulting in a 100% reduction of unauthorized user attempts.',
          'Built a scalable RESTful API framework for KeelHub, leveraging Express and Sequelize ORM to manage volunteer data retrieval for 300+ users, implemented in-memory caching with Redis to reduce database queries by 40%.'
        ]
    },
    {
        title: "Software Developer 1",
        company_name: "HealthEdge Software, Inc.",
        icon: healthedge,
        iconBg: "#E6DEDD",
        date: " May 2021 - June 2022",
        points: [
            'Designed a robust patient engagement platform, enabling seamless data exchange for patients and care providers by utilizing Spring Boot and Azure services to architect a scalable API framework, integrating Oracle database, engaging 500+ users.',
            'Streamlined health insurance claims processing, leveraging multithreading techniques like thread pooling and synchronized access for concurrent claim processing reducing processing time by 40%, processing 300+ claims per day seamlessly.',
            'Developed Java-based micro-service for population health module, which helps care teams drive outcomes for target populations by providing workflow automation and care coordination, enabling 25% faster workflows within Guiding Care.'
        ]
    },
    {
        title: "Software Developement Intern",
        company_name: "Hindustan Aeronautics Limited (HAL)",
        icon: HAL,
        iconBg: "#E6DEDD",
        date: " Feb 2020 - Apr 2020",
        points: [
          'Built Python scripts with computer numerical controlled codes to analyze optimal cutting speed and forces machining data for jet engine compressor blades, resulting in a 15% reduction of production time and 2% improved surface finish.',
          'Automated generation of daily production reports using pandas and Matplotlib, consolidating data from multiple spreadsheets, reducing report compilation time by 75% and improved data visualization for management decision-making.',
          'Created a user-friendly GUI application with PyQt5 for technicians to input and track equipment maintenance schedules, resulting in a 30% decrease in missed maintenance tasks and improved overall equipment reliability.'
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
    name: "Smart Contacts",
    description:
    "Smart Contacts Management System is a web-based application that allows users to manage their contacts effectively.",
    tags: [
      {
        name: "Java",
        color: "white-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Thymeleaf",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/rpalival/smart_contacts",
  },
  {
    name: "Social Hub",
    description:
    "Social Hub is a social networking application that allows users to create posts, comment on posts, and like posts.",
    tags: [
      {
        name: "React",
        color: "white-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/rpalival/social-hub",
  },
  {
    name: "Jobber",
    description:
    "Jobber is a job tracking application that allows users to save and track the status of their applications and networking contacts.",
    tags: [
        {
            name: "Angular",
            color: "white-text-gradient",
        },
        {
            name: "Django",
            color: "green-text-gradient",
        },
        {
            name: "AWS",
            color: "pink-text-gradient",
        },
    ],
    image: project3,
    source_code_link: "https://github.com/rpalival/Jobber-Front-End",
  },
];

export {socialMedia, experiences, testimonials, projects };
