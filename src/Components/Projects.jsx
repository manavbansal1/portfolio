import React from 'react';
import '../CSS/Projects.css';
import Project from './Project';
import teamBoxImage from '../Imgs/teamboxConquest.png';
import memoryImage from '../Imgs/custom-memory.png';
import chatServerImage from '../Imgs/chatServer.png';
import wanderwiseImage from '../Imgs/WanderWise.png';
import pingmeImage from '../Imgs/pingme.png'
import queryLabImage from '../Imgs/query-lab.png';
import studySageImage from '../Imgs/StudySage.png';

const projectsData = [ 
  {
    title: "StudySage",
    role: "App & Web Developer",
    date: "Sep. 2025 - Present",
    description: `
- Developed an AI-powered study companion app with real-time multiplayer games, gamified learning, and AI flashcard generation.
- Built the Android app using Kotlin and Jetpack Compose, featuring MVVM architecture and 90+ concurrent threads for performance.
- Implemented real-time collaboration features including study groups, live chat, and whiteboard sharing using Firebase and WebSockets.
- Created "Quiz Race" and "Study Tac Toe" multiplayer games powered by a Ktor backend.
- Integrated Gemini 1.5 Flash for AI summarization and content generation.
`,
    technologies: ["Kotlin", "Jetpack Compose", "Ktor", "Firebase", "Gemini AI", "Next.js"],
    image: studySageImage,
    github: "https://github.com/manavbansal1/StudySage",
    website: "https://studysage.vercel.app/"
  },
  {
    title: "Query Lab",
    role: "Creator & Developer",
    date: "Aug. 2025 - Nov. 2025",
    description: `
- Built an interactive web platform for practicing SQL (SQLite) and MongoDB queries in the browser.
- Implemented dual database support with sql.js for client-side SQL and MongoDB Atlas for cloud-based NoSQL.
- Integrated Google Gemini AI to provide intelligent error explanations and query suggestions.
- Designed a modern, responsive UI with Monaco Editor for syntax highlighting.
`,
    technologies: ["Next.js", "React", "MongoDB", "Gemini AI", "sql.js"],
    image: queryLabImage,
    github: "https://github.com/manavbansal1/query-lab",
    website: "https://query-lab.vercel.app/"
  },
  {
    title: "WanderWise",
    role: "Project Manager & Full Stack Developer",
    date: "Sep. - Dec. 2024",
    description: `
- Led a 4-person Agile team in building a React.js-based travel planner with Google Maps and Gemini APIs.
- Established and managed CI/CD pipeline with GitHub Actions & AWS Amplify for automated testing and deployment.
- Designed accessible UI and conducted REST API tests using Postman.
- Planned and tracked progress with GitHub Projects (Kanban-style).
`,
    technologies: ["React.js", "Figma", "Postman", "CI/CD", "AWS Amplify"],
    image: wanderwiseImage,
    github: "https://github.com/manavbansal1/WanderWise",
    website: "https://wander-wise-three.vercel.app/"
  },{
    title: "PingME",
    role: "Full Stack Developer",
    date: "Sep. 2025",
    description: `
- Built a real-time chat application with user authentication, online status tracking, and instant messaging using Socket.io for bidirectional communication.
- Developed RESTful API with Express.js and MongoDB for user management and message persistence, implementing JWT-based authentication with HTTP-only cookies.
- Designed responsive UI with React and custom CSS, integrating Cloudinary for image storage and Zustand for state management.
`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary", "Zustand", "JWT"],
    image: pingmeImage,
    github: "https://github.com/manavbansal1/PingMe",
    website: "https://pingme-rf7s.onrender.com/"
  },
  {
    title: "Team Box Conquest",
    role: "Developer",
    date: "Jan. - Apr. 2025",
    description: `
- Created a multiplayer, real-time grid game with team-based cell claiming and chat.
- Developed the socket-based client-server game in C using TCP/IP.
- Created a custom messaging protocol for state sync and chat.
- Built multithreaded server logic for player connections, resource locking, and team control.
- Applied concurrency control techniques to maintain real-time responsiveness and fairness.
`,
    technologies: ["C", "Sockets", "Multithreading", "TCP/IP", "Concurrency"],
    image: teamBoxImage,
    github: null,
    website: null
  },
  {
    title: "Custom Memory Allocator",
    role: "Developer",
    date: "Jan. - Apr. 2025",
    description: `
- Implemented a custom heap allocator using sbrk(), supporting First Fit, Best Fit, and Worst Fit strategies.
- Tracked metadata using bit-level manipulation; wrote alloc(), dealloc(), and allocinfo() APIs in C.
- Used GDB to debug memory leaks and valgrind for runtime verification.
- Built and tested with CMake and modular unit test harnesses.
`,
    technologies: ["C", "Memory Management", "GDB", "Valgrind", "CMake"],
    image: memoryImage,
    github: "https://github.com/manavbansal1/custom-memory-allocator",
    website: null
  },
  {
    title: "Group Chat Server",
    role: "Developer",
    date: "Jan. - Apr. 2025",
    description: `
- Developed a multi-client group chat server in C using TCP/IP sockets and concurrent I/O on Linux.
- Designed a custom binary protocol supporting strict message ordering, reliable delivery, and sender IP/port tagging.
- Created a fuzzing client using pthreads to simulate malformed and edge-case messages.
- Implemented dynamic client management, full protocol compliance, and a two-phase commit protocol for synchronized shutdown.
- Extensively tested with telnet and custom protocol testers, ensuring real-time compatibility and reliability.
`,
    technologies: ["C", "Sockets", "Concurrency", "Fuzz Testing", "TCP/IP"],
    image: chatServerImage,
    github: "https://github.com/manavbansal1/Group-Chat-Server-with-Fuzzing-Clients",
    website: null
  }
];

const Projects = () => {
  return (
    <div className="project-page-container">
      <h1 className="heading">Featured Projects</h1>
      <h2 className='about-subtitle baloo'>A showcase of my technical projects and development work</h2>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          role={project.role}
          date={project.date}
          description= {project.description}
          technologies={project.technologies}
          image={project.image}
          github={project.github}
          website={project.website}
        />
      ))}
    </div>
  );
};

export default Projects;

