import React from 'react';
import '../CSS/Skills.css';
import '../CSS/Projects.css';
import SkillBox from './SkillBox';

const Skills = () => {

  const skillsData = [
    {
      title: "Programming Languages",
      sections: [
        { subtitle: "Proficient", skills: ["Java", "C", "C++", "Python", "JavaScript", "SQL"] },
        { subtitle: "Familiar", skills: ["MongoDB", "X86-64 Assembly", "MATLAB"] },
        {subtitle: "Currently Learning",skills: ["Kotlin (Android Development)"], special: true }
      ]
    },
    {
      title: "Frontend Development",
      sections: [
        { subtitle: "Frameworks & Libraries", skills: ["React.js", "Bootstrap"]},
        { subtitle: "UI/UX & Styling", skills: ["HTML5", "CSS3", "Responsive Design", "Figma"] },
        { subtitle: "APIs", skills: ["REST APIs", "Google Maps API", "Gemini API"] }
      ]
    },
    {
      title: "Mobile Development",
      sections: [
        { subtitle: "Android", skills: ["Kotlin", "Android Studio"] },
        { subtitle: "Currently Expanding", skills: ["Native Android App Development"], special: true}
      ]
    },
    {
      title: "DevOps & Tools",
      sections: [
        { subtitle: "DevOps & CI/CD", skills: ["GitHub Actions", "AWS Amplify", "Docker"]},
        { subtitle: "Build & Project Tools", skills: ["Git", "GitHub", "CMake", "JIRA", "Kanban"]}
      ]
    },
    {
      title: "Backend & Systems Programming",
      sections: [
        { subtitle: "Network Programming", skills: ["TCP/IP Sockets", "Custom Protocols"]},
        { subtitle: "Concurrency", skills: ["Multithreading", "Pthreads", "Resource Locking"]},
        { subtitle: "Memory Management", skills: ["Custom Memory Allocators", "Heap Management"]},
        { subtitle: "System-Level", skills: ["Linux Systems", "Performance Optimization"]},
        { subtitle: "Databases", skills: ["SQL", "MongoDB"] }
      ]
    },
    {
      title: "Testing & Debugging",
      sections: [
        { subtitle: "API Testing", skills: ["Postman"]},
        { subtitle: "Network Testing", skills: ["Telnet"]},
        { subtitle: "Memory Analysis", skills: ["Valgrind", "GDB"]},
        { subtitle: "Performance", skills: ["Perf", "Fuzz Testing Tools"]},
        { subtitle: "Unit Testing", skills: ["JUnit", "Custom Test Harnesses"]}
      ]
    },
    {
      title: "Development Methodologies",
      sections: [
        { subtitle: "Project Management", skills: ["Agile", "Scrum", "Kanban"]},
        { subtitle: "Software Engineering", skills: ["Test-Driven Development", "Code Reviews"]},
        { subtitle: "System Design", skills: ["Client-Server Architecture", "Protocol Design"] },
        { subtitle: "Quality Assurance", skills: ["Automated Testing", "Performance Analysis"]}
      ]
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-content">
        <h1 className="heading h-skill">Technical Skills</h1>
        <p className="skills-subtitle">
          A comprehensive overview of my technical expertise across multiple domains
        </p>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <SkillBox key={index} skillCategory={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills