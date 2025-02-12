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

export const projectsData = [
    {
        cover: moiveo6,
        image: [moiveo1, moiveo2, moiveo3, moiveo4, moiveo5, moiveo6],
        title: "Moiveo: Your One-Stop for TV Entertainment",
        description: "Moiveo is strictly for the movie/tv-show lovers. Moiveo relies heavily on the TMDB API. It showcases my ability to work deeply with data from an API—fetching, manipulating, and displaying it dynamically on the UI. I focused on crafting a fully responsive design, making sure the UI adapts smoothly to any screen size. I used Redux Toolkit for efficient state management, ensuring seamless data flow across the application. React Router came in handy for seamless navigation.",
        technologies: ["Tailwind", "React", "Axios"],
        demo: "https://moiveo-app.netlify.app/",
        github: "https://github.com/shiffydeen/Movie-App"
       
        
    },
    {
        cover: udemy1,
        image: [udemy2, udemy3, udemy4, udemy5],
        title: "Udemy Clone - Custom Features Added",
        description: "This Udemy clone mainly displays my ability to implement functionalities and component reusability. In this project, I added the Hoverable Cart Component, Dynamic Course Filtering, Toast Notification for item added and many more features. This project reflects my ability to bring practical, high-quality solutions to real-world web applications. Took a step back from TailwindCSS and used the Styled Component library for styling. Interact with the the Live Demo to get a better feel of these functionalities.",
        technologies: ["CSS", "React"],
        demo: "https://cdemy-upgrade.netlify.app/",
        github: "https://github.com/shiffydeen/udemy-clone"
    },
    {
        cover: ciya1,
        image: [ciya11, ciya2, ciya3, ciya6, ciya4, ciya5],
        title: "Ciya Trips - Exploration Made Easy",
        description: "Ciya Trips is a Travel Agency that takes away the hassle of trip planning. This project displays my ability to design beautiful, interactive and responsive UI to keep the visitor engaged. This project served as an opportunity to show Typescript skill. Seamless multi-page navigation was achieved using the React Router library. Other libraries were also used to achieve interactivity.",
        technologies: ["Tailwind", "React", "TypeScript"],
        demo: "https://ciyaexploration.netlify.app/",
        github: "https://github.com/shiffydeen/Ciya-Trips"
    },
]