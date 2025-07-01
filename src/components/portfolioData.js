import moiveo1 from '../images/moiveo-1.png';
import moiveo2 from '../images/moiveo-2.png';
import moiveo3 from '../images/moiveo-3.png';
import moiveo4 from '../images/moiveo-4.png';
import moiveo5 from '../images/moiveo-5.png';
import moiveo6 from '../images/moiveo-6.png';

import udemy1 from '../images/udemy-1.png'
import udemy2 from '../images/udemy-2.png'
import udemy3 from '../images/udemy-3.png'
import udemy4 from '../images/udemy-4.png'
import udemy5 from '../images/udemy-5.png'

import ciya1 from '../images/ciya-1.png';
import ciya11 from '../images/ciya11.png';
import ciya2 from '../images/ciya-2.png';
import ciya3 from '../images/ciya-3.png';
import ciya4 from '../images/ciya-4.png';
import ciya5 from '../images/ciya-5.png';
import ciya6 from '../images/ciya-6.png';

import oasis1 from '../images/oasis1.jpg';
import oasis2 from '../images/oasis2.jpg';
import oasis3 from '../images/oasis3.jpg';
import oasis4 from '../images/oasis4.jpg';

import pospadi from '../images/pospadi.jpg';
import pospadi1 from '../images/pospadi1.jpg';
import pospadi2 from '../images/pospadi2.jpg';
import pospadi3 from '../images/pospadi3.jpg';


export const projectsData = [
    
    {
        cover: oasis1,
        image: [oasis1, oasis2, oasis3, oasis4],
        title: "The Wild Oasis: Welcome to Paradise",
        description: "The Wild Oasis is a full-stack hotel booking platform where guests can explore available cabins, check availability, and book their stays in advance. Built with Next.js, Supabase, and Tailwind CSS, the app features a responsive interface and a seamless booking flow. Guests can securely log in, view cabin details, select preferred dates, and manage their reservations — all in one place.",
        technologies: ["NextJS", "TailwindCSS", "Supabase"],
        demo: "https://oasisthewild.netlify.app",
        github: "https://github.com/shiffydeen/the-wild-oasis-website.git"
       
        
    },
    {
        cover: pospadi,
        image: [pospadi1, pospadi2, pospadi3],
        title: "POS Padi",
        description: "POS Padi is an MVP, a powerful point-of-sale transaction management system. Whether you’re a POS agent, business owner, or company managing multiple agents, POS-Padi helps you stay on top of your operations, reduce fraud using AI, and manage disputes, all from one place.",
        technologies: ["React", "TypeScript", "ChakraUI", "Nodejs"],
        demo: "https://pospadi.com.ng/",
        github: "https://github.com/InternPulse/pos-padi-frontend"
       
        
    },
    {
        cover: moiveo6,
        image: [moiveo1, moiveo2, moiveo3, moiveo4, moiveo5, moiveo6],
        title: "Moiveo: Your One-Stop for TV Entertainment",
        description: "Moiveo is designed for movie and TV-show enthusiasts, built with a deep integration of the TMDB API. This project highlights my ability to work extensively with external APIs—fetching, manipulating, and dynamically displaying data in real-time. I focused on crafting a fully responsive design that adapts seamlessly across all screen sizes, ensuring an optimal user experience on any device. Leveraging Redux Toolkit, I implemented efficient state management. React Router was integrated for seamless navigation across different views, enhancing the user experience within the app.",
        technologies: ["TailwindCSS", "ReactJS", "Axios"],
        demo: "https://moiveo-app.netlify.app/",
        github: "https://github.com/shiffydeen/Movie-App"
       
        
    },
    {
        cover: udemy1,
        image: [udemy2, udemy3, udemy4, udemy5],
        title: "Udemy Clone - Custom Features Added",
        description: "This project highlights my proficiency in implementing complex functionalities and ensuring efficient component reusability. Key features include a hoverable cart component for quick access to selected items, dynamic course filtering that enables users to sort courses by categories seamlessly, and a toast notification system that provides immediate feedback when items are added to the cart. Opting for the Styled Components library instead of Tailwind CSS allowed me to build modular, maintainable styles within the project. This clone reflects my ability to deliver practical, high-quality solutions for real-world web applications, ensuring both functionality and a smooth user experience. Explore the live demo for an interactive showcase of these features.",
        technologies: ["CSS", "ReactJS"],
        demo: "https://cdemy-upgrade.netlify.app/",
        github: "https://github.com/shiffydeen/udemy-clone"
    },
    {
        cover: ciya1,
        image: [ciya11, ciya2, ciya3, ciya6, ciya4, ciya5],
        title: "Ciya Trips - Exploration Made Easy",
        description: "Ciya Trips is a travel agency platform designed to simplify trip planning. This project highlights my ability to design beautiful, interactive, and fully responsive user interfaces that captivate and engage visitors. Leveraging TypeScript ensured type safety, improved code quality, and minimized runtime errors during development. Seamless multi-page navigation was achieved using React Router, providing smooth transitions between pages. Additionally, various libraries were integrated to enhance interactivity, making the platform user-friendly and efficient.",
        technologies: ["TailwindCSS", "ReactJS", "TypeScript"],
        demo: "https://ciyaexploration.netlify.app/",
        github: "https://github.com/shiffydeen/Ciya-Trips"
    },
]