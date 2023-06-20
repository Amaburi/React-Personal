import {
    astroo,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    elib,
    momoanimek,
    SmkTelkom,
    Jy,
    JyCakep
} from "../assets";


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "New in FrontEnd",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student",
      name: "SMK Telkom Purwokerto",
      icon: SmkTelkom,
      iconBg: "#383E56",
      date: "March 2020 - April 2023",
      points: [
        "Create Many Projects in this highschool such as Website using Laravel, Mobile App using React Native and Flutter, API using Express, Desktop App using C# and many more. ",
      ],
    },
    {
      title: "Coming Soon",
      name: "Coming Soon",
      icon: JyCakep,
      iconBg: "#E6DEDD",
      date: "TBA",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      title: "Coming Soon",
      name: "Coming Soon",
      icon: Jy,
      iconBg: "#E6DEDD",
      date: "TBA",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
    {
      title: "Coming Soon",
      name: "Coming Soon",
      icon: Jy,
      iconBg: "#E6DEDD",
      date: "TBA",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    },
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
      name: "Astroo the Article Summarizer",
      description:
        "With The Power of Rapid Api and React. You can Summarize any article you want with it.",
      tags: [
        {
          name: "React",
          color: "orange-text-gradient",
        },
      ],
      image: astroo,
      source_code_link: "https://github.com/Amaburi/Reactttttt/tree/Satu/ai",
    },
    {
      name: "E-Ticket",
      description:
          "Android App for operator to print out the ticket that the user has been ordered.",
      tags: [
        {
          name: "Dart",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "black-gradient",
        },
      ],
      image: momoanimek,
      source_code_link: "https://github.com/Amaburi/Flutter-E-ticket",
    },
    {
      name: "UniBox",
      description:
        "An Android app for children to learn about our solar system with a quiz in it.",
      tags: [
        {
          name: "Express",
          color: "blue-text-gradient",
        },
        {
          name: "React Native",
          color: "green-text-gradient",
        },
      ],
      image: momoanimek,
      source_code_link: "https://github.com/Amaburi/Universe",
    },
    {
      name: "E-Lib",
      description:
        "A web where you can borrow book and there's a dashboard admin too.",
      tags: [
        {
          name: "Php",
          color: "black-gradient",
        },
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "orange-text-gradient",
        },
      ],
      image: elib,
      source_code_link: "https://github.com/Amaburi/E-Lib",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };