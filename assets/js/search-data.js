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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
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
        },{id: "nav-music",
          title: "music",
          description: "space for me to share about music",
          section: "Navigation",
          handler: () => {
            window.location.href = "/music/";
          },
        },{id: "post-using-classical-planning-for-overcooked",
        
          title: "using classical planning for overcooked",
        
        description: "this post is a practical application of classical planning to solve a level of the videogame `overcooked 2`",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hashnode-5/";
          
        },
      },{id: "post-uninformed-search-algorithms",
        
          title: "uninformed search algorithms",
        
        description: "this post is a recap of the most common informed search algorithms for graphs and trees",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hashnode-1/";
          
        },
      },{id: "post-comparing-performance-of-various-search-algorithms-in-a-forward-planning-agent",
        
          title: "comparing performance of various search algorithms in a forward-planning agent",
        
        description: "this post is a comparison of the performance of various uninformed and informed search algorithms",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/hashnode-0/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-marea-y-viento-out-now",
          title: 'MAREA Y VIENTO out now! 🥁',
          description: "",
          section: "News",},{id: "news-un-altre-dia-mes-out-now",
          title: 'UN ALTRE DIA MES out now! 🥁',
          description: "",
          section: "News",},{id: "projects-cv-assistant",
          title: 'cv assistant',
          description: "app that converts any cv in pdf format to word docs with pre-designed templates",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
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
