import React from 'react';
import '../CSS/Projects.css';
import Project from './Project';
import teamBoxImage from '../Imgs/teamboxConquest.png';
import memoryImage from '../Imgs/custom-memory.png';
import chatServerImage from '../Imgs/chatServer.png';
import wanderwiseImage from '../Imgs/WanderWise.png';

const projectsData = [ {
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

