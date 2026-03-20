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
    title: 'OmniFood',
    category: 'html-css-javascript',
    image:
      './assets/project-thumbnails/optimized/omnifood-website-landing.webp',
    description: 'A Food Website landing page developed using HTML & CSS',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    keyFeatures: ['Responsive Layouts', 'Smooth Scrolling', 'CSS Animations'],
    impact: 'Improved UI design foundations and adherence to modern web standards.',
    responsive: true,
    demoLink: 'https://vasu-omnifood-website-landing-page.netlify.app/',
    repoLink:
      'https://github.com/Sreenivasulu-Kalluru/Omnifood-Website-Landing-Page',
  },

  {
    id: 3,
    title: 'Property Pulse',
    category: 'fullstack',
    image: './assets/project-thumbnails/optimized/property-pulse.webp',
    description:
      'Property Pulse is a Property Rental Fullstack Application developed using Next.js 14',
    techStack: ['Next.js 14', 'React', 'Tailwind CSS', 'MongoDB'],
    keyFeatures: ['Property Listing & Search', 'User Authentication', 'Interactive Maps'],
    impact: 'Built a highly scalable application using server-side rendering for optimal SEO and performance.',
    responsive: true,
    demoLink: 'https://property-pulse-vasu.vercel.app/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/property-pulse',
  },
  {
    id: 4,
    title: 'Streamify',
    category: 'fullstack',
    image: './assets/project-thumbnails/optimized/streamify.webp',
    description:
      'Streamify is a Language Learning Platform built using MERN Stack',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    keyFeatures: ['Real-time Video Streaming', 'Interactive Quizzes', 'Progress Tracking'],
    impact: 'Engineered a comprehensive learning platform, successfully managing complex states and real-time data flow.',
    responsive: true,
    demoLink: 'https://streamify-1pmm.onrender.com/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/streamify',
  },

  {
    id: 6,
    title: 'Proshop',
    category: 'fullstack',
    image: './assets/project-thumbnails/optimized/proshop-mern.webp',
    description: 'An Ecommerce website developed using MERN stack',
    techStack: ['React', 'Redux', 'Node.js', 'MongoDB', 'PayPal API'],
    keyFeatures: ['Shopping Cart & Checkout', 'Admin Product Management', 'Payment Integration'],
    impact: 'Implemented secure payment gateways and comprehensive global state management for a seamless shopping experience.',
    isCaseStudy: true,
    architecture: 'MERN stack application employing Redux for complex global state management and integrated with PayPal for secure transactions.',
    challenges: 'Building a robust JWT-based authentication system and handling asynchronous Redux actions for a reliable shopping cart experience.',
    responsive: true,
    demoLink: 'https://proshop-r9ag.onrender.com/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/proshop-mern',
  },
  {
    id: 7,
    title: 'Campus Book Exchange',
    category: 'fullstack',
    image: './assets/project-thumbnails/optimized/campus-book-ex.webp',
    description:
      'A platform designed to facilitate the secure, real-time exchange of textbooks and study materials among students within an academic campus.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    keyFeatures: ['Real-time search with filters', 'User Authentication (JWT)', 'In-app messaging system'],
    impact: 'Replaced traditional bulletin boards, providing a modern, efficient, and cost-saving solution for students.',
    isCaseStudy: true,
    architecture: 'RESTful API architecture with a React SPA frontend and a MongoDB NoSQL database for flexible data schemas.',
    challenges: 'Handling real-time updates for book availability and building a secure messaging system for user communication.',
    responsive: true,
    demoLink: 'https://campus-book-exchange.vercel.app/',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/campus-book-exchange',
  },
  {
    id: 8,
    title: 'SVU MCA Alumni Portal',
    category: 'fullstack',
    image: './assets/project-thumbnails/optimized/svu-mca-alumni.webp',
    description:
      'The official digital platform for Sri Venkateswara University MCA Department, designed to bridge the gap between alumni and current students.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    keyFeatures: ['Alumni Directory & Search', 'Job Board & Event Management', 'Mentorship Booking'],
    impact: 'Created a centralized hub to facilitate mentorship, job opportunities, and real-time networking for the MCA community.',
    isCaseStudy: true,
    architecture: 'MERN stack application heavily utilizing Cloudinary for media asset management and optimized image delivery.',
    challenges: 'Designing a robust RBAC (Role-Based Access Control) system for Students, Alumni, and Admins to ensure data privacy and appropriate feature access.',
    responsive: true,
    demoLink: 'https://svu-mca-alumni-portal.vercel.app//',
    repoLink: 'https://github.com/Sreenivasulu-Kalluru/svu-mca-alumni-portal',
  },
];
