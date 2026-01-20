const servicesData = [
  {
    title: 'Frontend Development',
    category: 'frontend',
    description: [
      'I build responsive, interactive, and accessible user interfaces using modern technologies like React.js, Tailwind CSS, and HTML5/CSS3.',
      'I focus on creating seamless user experiences, ensuring pixel-perfect implementations, and optimizing performance across all devices and browsers.',
    ],
  },
  {
    title: 'Backend Development',
    category: 'backend',
    description: [
      'I develop robust and scalable server-side applications using Node.js and Express.js, ensuring secure and efficient data handling.',
      'My experience includes designing RESTful APIs, managing MongoDB databases, and implementing authentication and authorization systems.',
    ],
  },
  {
    title: 'Full Stack Development',
    category: 'fullstack',
    description: [
      'I offer end-to-end web application development, combining powerful backends with dynamic frontends to deliver complete digital solutions.',
      'From database architecture to client-side interactivity, I handle the entire development lifecycle to bring complex ideas to life.',
    ],
  },
];

const projects = [
  {
    id: 1,
    title: 'Edge Ledger',
    category: 'html-css-javascript',
    image: './assets/project-thumbnails/optimized/edge-ledger.webp',
    description:
      'A Finance Company Website developed using HTML & CSS, focused mainly on Background Images and overall Website looks & appearance',
    responsive: true,
    demoLink: 'https://vasu-edge-ledger-project.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/html-css-projects/tree/main/EDGELEDGER_PROJECT',
  },
  {
    id: 2,
    title: 'News Grid',
    category: 'html-css-javascript',
    image: './assets/project-thumbnails/optimized/news-grid.webp',
    description:
      'A News Website made using HTML & CSS, focused mainly on CSS Grid and Flexbox Layout Models',
    responsive: true,
    demoLink: 'https://vasu-news-grid-project.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/html-css-projects/tree/main/News_Grid_Project',
  },
  {
    id: 3,
    title: 'Credit Card Website',
    category: 'html-css-javascript',
    image:
      './assets/project-thumbnails/optimized/credit-card-landing-page.webp',
    description:
      'A Credit Card Website Landing Page developed using HTML & CSS, focused mainly on CSS Position Properties and Layouts',
    responsive: false,
    demoLink: 'https://vasu-credit-card-landing-page.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/HTML%20%26%20CSS/FSJS%202.0%20Project%2007%20Credit%20Card%20Landing%20Page',
  },
  {
    id: 4,
    title: 'Hosting Website',
    category: 'html-css-javascript',
    image:
      './assets/project-thumbnails/optimized/hosting-website-landing-page.webp',
    description:
      'A Hosting Services Website Landing Page developed using HTML & CSS, focused mainly on CSS Position Properties and Layouts and overall Design of the website',
    responsive: false,
    demoLink: 'https://vasu-hosting-site-landing-page.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/HTML%20%26%20CSS/FSJS%202.0%20Project%2008%20Hosting%20Site%20Landing%20Page',
  },
  {
    id: 5,
    title: 'Gaming Website',
    category: 'html-css-javascript',
    image:
      './assets/project-thumbnails/optimized/gaming-website-landing-page.webp',
    description:
      'A Gaming Website Landing Page developed using HTML & CSS, focused mainly on CSS Position Properties, button styling and Background images alignment',
    responsive: false,
    demoLink: 'https://vasu-gaming-website-landing-page.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/HTML%20%26%20CSS/FSJS%202.0%20Project%2009%20Gaming%20Landing%20Page',
  },
  {
    id: 6,
    title: 'RealEstate Website',
    category: 'html-css-javascript',
    image:
      './assets/project-thumbnails/optimized/real-estate-landing-page.webp',
    description:
      'A Real Estate Website Landing Page developed using HTML & CSS, focused mainly on CSS Position Properties, overall website appearance',
    responsive: false,
    demoLink: 'https://vasu-real-estate-landing-page.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/HTML%20%26%20CSS/FSJS%202.0%20Project%2010%20Real%20Estate%20Landing%20Page',
  },
  {
    id: 7,
    title: 'Beats Website',
    category: 'html-css-javascript',
    image: './assets/project-thumbnails/optimized/beats-landing-page.webp',
    description:
      'An Audio Company Website Landing Page developed using HTML & CSS, focused mainly on CSS Image Properties, alignment and buttons',
    responsive: false,
    demoLink: 'https://vasu-beats-landing-page.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/HTML%20%26%20CSS/FSJS%202.0%20Project%2011%20Beats%20Landing%20Page',
  },
  {
    id: 8,
    title: 'Data Analytics Website',
    category: 'html-css-javascript',
    image:
      './assets/project-thumbnails/optimized/data-analytics-landing-page.webp',
    description:
      'A Data Analytics Website Landing Page developed using HTML & CSS, focused mainly on CSS Backgrounds, overall website appearance',
    responsive: false,
    demoLink: 'https://vasu-data-analytics-landing-page.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/HTML%20%26%20CSS/FSJS%202.0%20Project%2012%20Data%20Analytics%20Landing%20Page',
  },
  {
    id: 9,
    title: 'Calculator',
    category: 'html-css-javascript',
    image: './assets/project-thumbnails/optimized/calculator-project.webp',
    description: 'Calculator app',
    responsive: true,
    demoLink: 'https://vasu-calculator-app.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/JavaScript%20Projects/Calculator',
  },
  {
    id: 10,
    title: 'Item Lister',
    category: 'html-css-javascript',
    image: './assets/project-thumbnails/optimized/item-lister.webp',
    description: 'Item Lister Website',
    responsive: true,
    demoLink: 'https://vasu-item-lister.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/JavaScript%20Projects/Item%20Lister%20Project',
  },
  {
    id: 11,
    title: 'Image LightBox',
    category: 'html-css-javascript',
    image: './assets/project-thumbnails/optimized/image-lightbox.webp',
    description: 'Image LightBox Website',
    responsive: true,
    demoLink: 'https://vasu-image-light-box.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/JavaScript%20Projects/Image%20LightBox',
  },
  {
    id: 12,
    title: 'OmniFood',
    category: 'html-css-javascript',
    image:
      './assets/project-thumbnails/optimized/omnifood-website-landing.webp',
    description: 'A Food Website landing page developed using HTML & CSS',
    responsive: true,
    demoLink: 'https://vasu-omnifood-website-landing-page.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/Omnifood-Website-Landing-Page',
  },
  {
    id: 13,
    title: 'Fast React Pizza.Co',
    category: 'react-tailwind',
    image: './assets/project-thumbnails/optimized/fast-react-pizza-co.webp',
    description: 'A Pizza Cart website developed using React & Tailwind CSS',
    responsive: true,
    demoLink: 'https://vasu-fast-react-pizza-co.netlify.app/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/fast-react-pizza-co',
  },
  {
    id: 14,
    title: 'Food Kitchen',
    category: 'react-tailwind',
    image: './assets/project-thumbnails/optimized/food kitchen.webp',
    description:
      'A Food Ordering Website is similiar to Swiggy Website developed using React & Tailwind CSS',
    responsive: true,
    demoLink: 'https://food-kitchen-vasu.vercel.app/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/food-kitchen',
  },
  {
    id: 15,
    title: 'Eat and Split',
    category: 'react-tailwind',
    image: './assets/project-thumbnails/optimized/eat-and-split.webp',
    description: 'A Bill Split Calculator Application developed using React',
    responsive: false,
    demoLink: 'https://eat-and-split.netlify.app/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/eat-and-split',
  },
  {
    id: 16,
    title: 'Best Eats',
    category: 'react-tailwind',
    image:
      './assets/project-thumbnails/optimized/best-eats-react-tailwind-food-website.webp',
    description:
      'A Food Website landing page developed using React and Tailwind CSS',
    responsive: true,
    demoLink: 'https://react-tailwind-food-app.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/react-tailwind-food-website',
  },
  {
    id: 17,
    title: 'Use Popcorn',
    category: 'react-tailwind',
    image: './assets/project-thumbnails/optimized/use pop corn.webp',
    description:
      'A Movie Search Website, where we can search movies, and add them to the wishlist.',
    responsive: true,
    demoLink: 'https://usepopcorn-vasu.netlify.app/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/use-popcorn',
  },
  {
    id: 18,
    title: 'Mobile Shop',
    category: 'react-tailwind',
    image: './assets/project-thumbnails/optimized/mobile-shopping-cart.webp',
    description: 'A Mobile Shopping Cart Website made using React',
    responsive: true,
    demoLink: 'https://mobile-shopping-cart-vasu.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/mobile-shopping-cart-react',
  },
  {
    id: 19,
    title: 'Netlfix GPT',
    category: 'react-tailwind',
    image: './assets/project-thumbnails/optimized/netfix-gpt.webp',
    description:
      'A Netfix website clone developed using React, Tailwind CSS and Firebase <br /> Note: This website is under progress',
    responsive: true,
    demoLink: 'https://vasu-netfilx-gpt.netlify.app/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/netflix-gpt',
  },
  {
    id: 20,
    title: 'Rock Paper Scissors',
    category: 'react-tailwind',
    image: './assets/project-thumbnails/optimized/rock-paper-scissor.webp',
    description: 'Rock Paper Scissors Game',
    responsive: true,
    demoLink: 'https://vasu-rock-paper-scissor.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/React/rock-paper-scissor',
  },
  {
    id: 21,
    title: 'VS Code Clone',
    category: 'react-tailwind',
    image: './assets/project-thumbnails/optimized/vs-code-clone.webp',
    description: 'VS Code Website clone developed using Tailwind CSS',
    responsive: true,
    demoLink: 'https://vasu-vs-code-clone.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/FSJS-2.0/tree/main/Tailwind%20CSS/Project%2001%20VS%20Code%20Clone',
  },
  {
    id: 22,
    title: 'Challenges Website',
    category: 'react-tailwind',
    image: './assets/project-thumbnails/optimized/challenges-app-react.webp',
    description:
      'A Challenges Website developed using React and Framer motion. Mainly Focused on Animations and Transitions',
    responsive: true,
    demoLink: 'https://challenges-app-react.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/challeges-app-with-react',
  },
  {
    id: 23,
    title: 'Cook-Mom',
    category: 'react-tailwind',
    image: './assets/project-thumbnails/optimized/cook-mom.webp',
    description:
      'A Recipe search website developed using React and Tailwind CSS',
    responsive: true,
    demoLink: 'https://cook-mom-ten.vercel.app/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/Cook-Mom',
  },
  {
    id: 24,
    title: 'Proshop',
    category: 'fullstack',
    image: './assets/project-thumbnails/optimized/proshop-mern.webp',
    description: 'An Ecommerce website developed using MERN stack',
    responsive: true,
    demoLink: 'https://proshop-r9ag.onrender.com/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/proshop-mern',
  },
  {
    id: 25,
    title: 'Promptopia',
    category: 'fullstack',
    image: './assets/project-thumbnails/optimized/promptopia.webp',
    description:
      'Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts - developed using Next.js',
    responsive: true,
    demoLink: 'https://vasu-promptopia.vercel.app/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/promptopia',
  },
  {
    id: 26,
    title: 'VSK Estate',
    category: 'fullstack',
    image: './assets/project-thumbnails/optimized/vsk-estate-mern.webp',
    description:
      'VSK Estate is a RealEstate project developed using MERN Stack along with Tailwind CSS for Styling',
    responsive: true,
    demoLink: 'https://vsk-estate-mern.onrender.com/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/vsk-estate-mern',
  },
  {
    id: 27,
    title: 'Property Pulse',
    category: 'fullstack',
    image: './assets/project-thumbnails/optimized/property-pulse.webp',
    description:
      'Property Pulse is a Property Rental Fullstack Application developed using Next.js 14',
    responsive: true,
    demoLink: 'https://property-pulse-vasu.vercel.app/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/property-pulse',
  },
  {
    id: 28,
    title: 'Streamify',
    category: 'fullstack',
    image: './assets/project-thumbnails/optimized/streamify.webp',
    description:
      'Streamify is a Language Learning Platform built using MERN Stack',
    responsive: true,
    demoLink: 'https://streamify-1pmm.onrender.com/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/streamify',
  },
];
