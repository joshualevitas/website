import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    mythical,
    northwestern,
    associated,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    c,
    cpp,
    cs,
    mysql,

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
      title: "React JS Development",
      icon: web,
    },
    {
      title: "Language Modeling",
      icon: mobile,
    },
    {
      title: "Natural Language Processing",
      icon: backend,
    },
    {
      title: "Data Analysis",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: cs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Data Analysis and Machine Learning Intern",
      company_name: "Mythical Games",
      icon: mythical,
      iconBg: "#000000",
      date: "July 2022 - September 2022",
      points: [
        "Supported software development efforts of decentralized gaming application using blockchain technology to build games where players can own the assets they develop or acquire on the EOSIO platform",
        "Optimized Machine Learning pricing models within Mythical Marketplace (a web-based exchange to host transactions of NFT game items) using feature engineering to select, manipulate, and transform raw data model inputs",
        "Authored a database auditing system to regularly and automatically enforce data architecture convention compliance across more than 100 company CockroachDB databases",
      ],
      iconSize: "60%"
    },
    {
      title: "Bioinformatics Intern",
      company_name: "Shilatifard Laboratory, Northwestern Feinberg School of Medicine",
      icon: northwestern,
      iconBg: "#FFFFFF",
      date: "April 2022 - June 2022",
      points: [
        "Worked under Dr. Marta Iwanaszko, a bioinformatician researching gene transciption using computational biology and integrating machine learning technology to help evaluate circadian biology",
        " Implemented computational pipelines to process and analyze genomic sequencing data using Northwestern University's high performance computing cluster",
      ],
      iconSize: "70%"
    },
    {
      title: "Data Integration Intern",
      company_name: "Associated Insurance and Risk Management Advisors",
      icon: associated,
      iconBg: "#FFFFFF",
      date: "June 2020 - September 2020",
      points: [
        "Analyzed policy underwriting data to identify trends and correlations",
        "Assisted with the integration of third-party software systems and data sources into the company's technology stack",
        "Created technical documentation and user manuals to train employees on new software",
      ],
      iconSize: "70%"
    },
    // add more as they come :)
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
      name: "Chorus",
      description:
        "Web-based collaborative beat creation app. Users can share and edit music in real time with other users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };