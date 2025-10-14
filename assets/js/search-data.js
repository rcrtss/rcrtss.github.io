// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "In this section I upload some of my work through academia, industry, and others. You&#39;ll find examples of my work in Robotics, Embedded Systems, Software Development, and Intelligent Systems Integration.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-education",
          title: "education",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "summary of my personal and professional trayectory",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "education-bsc-in-mechatronics-engineering",
          title: 'BSc in Mechatronics Engineering',
          description: "",
          section: "Education",handler: () => {
              window.location.href = "/education/bsc_mechatronics/";
            },},{id: "education-diploma-in-automotive-mechatronics",
          title: 'Diploma in Automotive Mechatronics',
          description: "Diploma in Automotive Mechatronics from Anáhuac University.",
          section: "Education",handler: () => {
              window.location.href = "/education/diploma_automotive/";
            },},{id: "education-eps-in-robotics-and-automation",
          title: 'EPS in Robotics and Automation',
          description: "European Project Semester at ENIT, France.",
          section: "Education",handler: () => {
              window.location.href = "/education/eps_enit/";
            },},{id: "education-applied-data-science-program",
          title: 'Applied Data Science Program',
          description: "MIT Professional Education certificate in Applied Data Science.",
          section: "Education",handler: () => {
              window.location.href = "/education/mit_datascience/";
            },},{id: "education-artificial-intelligence-nano-degree",
          title: 'Artificial Intelligence Nano Degree',
          description: "Udacity Nano Degree in Artificial Intelligence.",
          section: "Education",handler: () => {
              window.location.href = "/education/udacity_ai/";
            },},{id: "projects-cv-assistant",
          title: 'cv assistant',
          description: "app that converts any cv in pdf format to word docs with pre-designed templates",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_cv_assistant/";
            },},{id: "projects-switching-recommender-system-for-music-platform",
          title: 'switching recommender system for music platform',
          description: "Capstone project in recommender systems for MIT applied data science program.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_rec_system/";
            },},{id: "projects-autonomous-mobile-robot-that-follows-a-target",
          title: 'autonomous mobile robot that follows a target',
          description: "As part of the European Project Semester, we developed a software solution for an AMR to follow a person while avoiding static and dynamic obstacles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_amr_enit/";
            },},{id: "projects-mcu-based-embedded-control-system-for-liquid-mixing-station",
          title: 'mcu-based embedded control system for liquid mixing station',
          description: "Embedded control system for the Festo MPS® PA mixing station, replacing traditional PLCs with a cost-effective Arduino-based solution.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_liquid_mix/";
            },},{id: "projects-kinematic-model-of-quadruped-robot",
          title: 'kinematic model of quadruped robot',
          description: "modelled the inverse kinematics of a quadruped robot in CAE software",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_chop_model/";
            },},{id: "projects-current-controlled-power-source",
          title: 'current-controlled power source',
          description: "built a variadic DC 18V power source",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_voltage_source/";
            },},{id: "projects-multi-agent-round-table-platform",
          title: 'multi-agent round table platform',
          description: "proof of concept for decision-support platform based in a round table discussion (wip)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_multi_agent_roundtable/";
            },},{id: "projects-indirect-calorimetry-cage",
          title: 'indirect calorimetry cage',
          description: "designed and built an indirect calorimetry cage to measure heat production in laboratory rats, for studying obesity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_indirect_calorimetry_cage/";
            },},{id: "projects-multi-agent-round-table-platform-wip",
          title: 'multi-agent round table platform (wip)',
          description: "work in progress for a decision-support platform based in a round table discussion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_aind_projects/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rodrigo-cortes-s", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%6F_%63%6F%72%74%65%73%31%30@%68%6F%74%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/rcrtss", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
