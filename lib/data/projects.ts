// data/projects.ts
import { Project } from '@/components/projects/type';

export const projects: Project[] = [
    {
        id: '10',
        title: 'Derana Landscapping',
        description:
            'Developed a real client-based landscaping management application designed to streamline both administrative and customer-level operations. The system efficiently handles end-to-end business processes including service request management, inventory management, construction project handling, and overall system administration, providing a smooth and organized workflow for the client’s business operations.',
        tags: [
            "Nex.js",
            "TypeScript",
            "Prisma",
            "Neon",
            "Clerk",
            "Shadcn UI",
            "TypeScript"
        ],
        image: '/assets/projects/derana_landscaping.png',
        github: '',
        live: '',
    },
    {
        id: '9',
        title: 'Socially - (Social Media Application)',
        description:
            "Developed a fully responsive and user-friendly social media application using Next.js, delivering a seamless experience across all devices. Enabled users to create accounts, publish posts, like and comment on content, follow or unfollow other users, and receive real-time notifications. Integrated dynamic UI components with Tailwind CSS and shadcn/ui to create a modern, accessible, and visually appealing interface. Optimized performance and user interactions to ensure scalability, responsiveness, and strong user engagement.",
        tags: [
            "Next.js",
            "TypeScript",
            "Neon",
            "Prisma",
            "Postgers",
            "Clerk",
            "Tailwind",
            "Shadcn UI"
        ],
        image: '/assets/projects/socially.webp',
        github: 'https://github.com/AJSAAJITH/social_media_app-nextjs',
        live: 'https://social-media-app-nextjs.onrender.com/',
    },
    {
        id: '8',
        title: 'Netflix-Clone',
        description:
            'Developed a Netflix-Clone web application featuring a dynamic and responsive user interface using React and Tailwind CSS for an engaging user experience. Implemented secure user authentication and authorization using JWT for session management and role-based access control. Built a scalable backend with Node.js and MongoDB to handle seamless data management, including user profiles, content categories, and media streaming. Integrated RESTful APIs to fetch movie data and ensured optimal application performance with Vite for faster development and build processes.',
        tags: [
            "Node",
            "React",
            "Zustand",
            "TMDB Store",
            "Taildwind CSS",
            "MongoDB"
        ],
        image: '/assets/projects/netfilx-clone.jpg',
        github: 'https://github.com/AJSAAJITH/Netflix-Clone',
        live: 'https://netflix-clone-4o0u.onrender.com',
    },
    {
        id: '7',
        title: 'Real-Time Chat Application',
        description:
            'Developed a feature-rich real-time chat application to enable seamless user communication. Implemented secure login and registration using JWT and bcrypt. Integrated Socket.IO for real-time messaging. Designed a responsive and dynamic UI with React and Tailwind CSS. Utilized Zustand for scalable state management and added real-time toast notifications for user feedback. Configured environment variables to ensure secure and scalable deployment.',
        tags: [
            "Node",
            "Express",
            "Socket.io",
            "Zustand",
            "MongoDB"
        ],
        image: '/assets/projects/project_Chat_app.png',
        github: 'https://github.com/AJSAAJITH/Chat-App',
        live: 'https://chat-app-v50j.onrender.com/',
    },
    {
        id: '6',
        title: 'Hotel Managment System With (AI)',
        description:
            `Developed an AI-powered hotel management system enabling users to
     search for hotels based on their specific requirements using a real-time AI chat feature.
      Integrated a Large Language Model (LLM) with Retrieval-Augmented Generation (RAG) architecture
       for intelligent and precise search results. Built with Node.js, TypeScript, and Express for a
        robust backend, and designed a dynamic UI using Tailwind CSS and shadcn UI. Implemented secure
         authentication and authorization with Clerk middleware. Utilized MongoDB Atlas with Vector DB 
         for efficient data storage and retrieval, ensuring scalability and performance.`,

        tags: [
            "Node",
            "TypeScript",
            "RTK Query",
            "Clerk",
            "OpenAi",
            "Vector DB",
            "ShadcnUi"
        ],
        image: '/assets/projects/hotel_system.jpg',
        github: 'https://github.com/AJSAAJITH/AI-BASE-HOTEL-MANAGMENT-SYSTEM',
        live: 'https://aidf-horizone-frontend-saajith.netlify.app/',
    },
    {
        id: '5',
        title: 'Admin Dashboard UI',
        description:
            `Developed a responsive and modern admin panel UI using Tailwind CSS, shadcn UI, and TypeScript, focused on creating a clean and user-friendly dashboard interface. Built reusable components such as sidebars, navigation menus, cards, and form elements while ensuring a smooth and consistent experience across different screen sizes. The project was designed with a scalable and maintainable frontend structure, making it ready for future backend integration.`,
        tags: [
            "Next.js",
            "Typescript",
            "Shadcn UI"
        ],
        image: '/assets/projects/Demoadmin_dashboard/dashboard.png',
        github: 'https://github.com/AJSAAJITH/Modern_UI_Admin_Dashboard',
        live: '',
    },
    {
        id: '4',
        title: 'E-Commerce Website',
        description:
            `      Developed a full-fledged e-commerce platform using the MERN stack.
      Integrated payment gateways and implemented secure JWT-based user authentication and authorization.
      Built reusable React components and optimized performance for an enhanced user experience.`,
        tags: ["Node", "EXpress", "React", "Redux", "Taildwind", "MongoDB"],
        image: '/assets/projects/project1ECOM.png',
        github: 'https://github.com/AJSAAJITH/ECom',
        live: 'http://13.60.240.164/',
    },
    {
        id: '3',
        title: 'Blog Website with NEXT.js',
        description:
            `
     This project is a simple blog website built with Next.js,
      utilizing React for the frontend and Tailwind CSS for styling.
      It includes Mongoose for database interactions and TypeScript
      for type safety, ensuring scalability and maintainability. 
      The project also integrates ESLint for linting and adheres 
      to best practices using the Next.js configuration. Scripts
      for development, building, and production are defined to streamline the workflow.
    the modular structure ensures scalability and easy updates.
    `,
        tags: ["NEXT.js", "Tailwind CSS", "mongodb", "CSS"],
        image: '/assets/projects/project5.png',
        github: 'https://github.com/AJSAAJITH/NEXT-Blog-Project',
        live: '',
    },
    {
        id: '2',
        title: 'Hangman Game',
        description:
            `
Developed a small interactive game using TypeScript and React, ensuring type-safe
 code and enhanced maintainability. Implemented dynamic gameplay mechanics and a responsive
  UI for an engaging player experience. Utilized React's component-based architecture to build
   scalable and reusable features, optimizing performance for seamless gameplay.
    `
        ,
        tags: ["TypeScript", "JavaScript", "HTML", "CSS"],
        image: '/assets/projects/hangman.jpg',
        github: 'https://github.com/AJSAAJITH/Hangman',
        live: 'https://hangman-7bpo.onrender.com/',
    },
    {
        id: '1',
        title: 'User Authentication & Authorization System',
        description:
            `
      Designed a secure authentication and authorization system using JWT for user validation and role-based access control. 
      Built a responsive and dynamic user interface with Tailwind CSS and implemented the frontend using Vite and React for optimal performance. 
      Developed a scalable backend with Node.js and MongoDB, ensuring robust data management and security.
    `
        ,
        tags: ["Node", "React", "Express", "Tailwind CSS", "MongoDB"],
        image: '/assets/projects/project_Advance_MERN.png',
        github: 'https://github.com/AJSAAJITH/mern-advance-auth',
        live: 'https://mern-advance-auth-i1ur.onrender.com',
    },
];