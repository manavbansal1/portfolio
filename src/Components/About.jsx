import React from 'react';
import { User, GraduationCap, Code, Heart, Target, Coffee } from 'lucide-react';
import '../CSS/About.css';


const About = () => {
  return (
    
  <div className="about-container">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h1 className="heading abt-heading">About Me</h1>
            <p className="about-subtitle">Get to know the person behind the code</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="about-card intro-card">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="card-icon">
                    <User size={32} />
                  </div>
                  <h2 className="card-title">My Journey</h2>
                  <p className="card-text">
                    I'm Manav Bansal, a passionate third-year Computer Science student at Simon Fraser University 
                    with an insatiable curiosity for technology. My journey into programming began with a simple 
                    question: "How do computers actually work?" This curiosity has led me from understanding 
                    low-level memory management in C to building full-stack web applications with React.
                  </p>
                  <p className="card-text">
                    What fascinates me most about computer science is the spectrum of problems you can solve - 
                    from optimizing memory allocators at the system level to creating intuitive user experiences 
                    on the web. I believe the best developers understand both the foundation and the surface.
                  </p>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                  <div className="journey-visual">
                    <div className="code-snippet">
                      <div className="code-line">while (curious) &#123;</div>
                      <div className="code-line">  learn();</div>
                      <div className="code-line">  build();</div>
                      <div className="code-line">  repeat();</div>
                      <div className="code-line">&#125;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Excellence */}
          <div className="col-lg-6">
            <div className="about-card">
              <div className="card-icon">
                <GraduationCap size={32} />
              </div>
              <h2 className="card-title">Academic Excellence</h2>
              <div className="academic-info">
                <div className="university-info">
                  <h3>Simon Fraser University</h3>
                  <p>Bachelor of Science in Computer Science</p>
                  <div className="gpa-highlight">
                    <span className="gpa-number">4.28</span>
                    <span className="gpa-total">/4.33 GPA</span>
                  </div>
                </div>
                <div className="coursework">
                  <h4>Key Coursework:</h4>
                  <ul>
                    <li>Systems Programming & Operating Systems</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Computer Networks & Protocols</li>
                    <li>Software Engineering & Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-card">
              <div className="card-icon">
                <Code size={32} />
              </div>
              <h2 className="card-title">Technical Philosophy</h2>
              <p className="card-text">
                I believe in understanding technology from the ground up. Whether I'm implementing 
                custom memory allocators in C or building responsive UIs with React, I approach 
                each challenge with the same curiosity and attention to detail.
              </p>
              <div className="philosophy-points">
                <div className="point">
                  <strong>Low-Level Foundation:</strong> Understanding how systems work at their core
                </div>
                <div className="point">
                  <strong>High-Level Innovation:</strong> Creating solutions that users love
                </div>
                <div className="point">
                  <strong>Continuous Learning:</strong> Staying current with emerging technologies
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-card">
              <div className="card-icon">
                <Target size={32} />
              </div>
              <h2 className="card-title">Current Focus</h2>
              <p className="card-text">
                I'm currently expanding my skill set into mobile development with Kotlin and Android Studio, 
                while continuing to build full-stack web applications. I'm particularly interested in 
                creating seamless user experiences across platforms.
              </p>
              <div className="current-learning">
                <h4>Currently Learning:</h4>
                <div className="learning-tags">
                  <span className="learning-tag">Kotlin & Android Development</span>
                  <span className="learning-tag">Advanced React Patterns</span>
                  <span className="learning-tag">Cloud Architecture</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-card">
              <div className="card-icon">
                <Heart size={32} />
              </div>
              <h2 className="card-title">Beyond Code</h2>
              <p className="card-text">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or diving into tech articles and research papers. Outside of tech, I enjoy canoeing 
                and hiking - activities that help me disconnect, recharge, and approach problems with a fresh 
                perspective. I believe that the best developers are lifelong learners who stay curious about 
                the world around them.
              </p>
              <div className="interests">
                <h4>What drives me:</h4>
                <ul>
                  <li>Building solutions that make a real impact</li>
                  <li>Collaborating with like-minded developers</li>
                  <li>Exploring the intersection of technology and user experience</li>
                  <li>Staying at the forefront of technological innovation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 fun-facts-section">
            <div className="about-card fun-facts-card">
              <div className="card-icon">
                <Coffee size={32} />
              </div>
              <h2 className="card-title">Fun Facts About Me</h2>
              <div className="row">
                <div className="col-lg-4 col-md-12 my-3">
                  <div className="fun-fact">
                    <h4>🚀 First Programming Language</h4>
                    <p>Started with Python and fell in love with problem-solving</p>
                  </div>
                </div>
                <div className="col-lg-4  col-md-12 my-3">
                  <div className="fun-fact">
                    <h4>💡 Favorite Project Type</h4>
                    <p>Systems programming - there's something magical about low-level code</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 my-3">
                  <div className="fun-fact">
                    <h4>🎯 Career Goal</h4>
                    <p>To bridge the gap between complex systems and intuitive user experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
