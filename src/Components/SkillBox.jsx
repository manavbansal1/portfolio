import React from "react";
import '../CSS/Skills.css';

const SkillBox = ({ skillCategory }) => {
  if (!skillCategory) return null; 

  return (
    <div className="skill-category">
      <h2 className="skill-title">{skillCategory.title}</h2>
      <div className="category-content">
        {skillCategory.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="skill-section">
            <h3 className={`section-title ${section.special ? "special" : ""}`}>
              {section.subtitle}
            </h3>
            <div className="skills-pills">
              {section.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`skill-pill ${section.special ? "learning" : ""}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
