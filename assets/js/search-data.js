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
          description: "some personal and professional projects I have worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "summary of my personal and professional trayectory",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-cv-assistant",
          title: 'cv assistant',
          description: "app that converts any cv in pdf format to word docs with pre-designed templates",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_cv_assistant/";
            },},{id: "projects-switching-recommender-system-for-music-platform",
          title: 'switching recommender system for music platform',
          description: "capstone project in recommender systems for MIT applied data science program",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_rec_system/";
            },},{id: "projects-following-a-human-with-an-autonomous-mobile-robot",
          title: 'Following a Human with an Autonomous Mobile Robot',
          description: "As part of the European Project Semester, we developed a software solution for an AMR to follow a person while avoiding static and dynamic obstacles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_amr_enit/";
            },},{id: "projects-controller-for-liquid-mixing-station",
          title: 'controller for liquid mixing station',
          description: "embedded system and software to control a liquid mixing station",
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
            },},{id: "projects-multi-agent-round-table-platform-wip",
          title: 'multi-agent round table platform (wip)',
          description: "work in progress for a decision-support platform based in a round table discussion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_multi_agent_roundtable/";
            },},{id: "projects-indirect-calorimetry-cage",
          title: 'indirect calorimetry cage',
          description: "designed and built an indirect calorimetry cage to measure heat production in laboratory rats, for studying obesity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_indirect_calorimetry_cage/";
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
