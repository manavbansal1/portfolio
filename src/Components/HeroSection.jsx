import React from "react";
import githubLogo from "../Imgs/github.png";
import instagramLogo from "../Imgs/instagram.png";
import linkedinLogo from "../Imgs/linkedin.png";
import arrobaLogo from "../Imgs/arroba.png";
import "../CSS/HeroSection.css";


export default function HeroSection() {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row hero-content text-white align-items-center">
          <div className="col-lg-6 col-sm-12 mb-4 mb-lg-0">
            <h1 className="hero-title mb-3">
              Hi, I’m <span className="highlight">Manav Bansal</span>
            </h1>
            <p className="hero-text">
            I'm a third-year CS student at SFU. Explore my portfolio to see my projects, skills, and the work I'm passionate about.
            </p>
            <div className= "contact-Me">
                <a href="https://github.com/manavbansal1" target="_blank" rel="noopener"><img className="social-icon mx-2" src={githubLogo} alt="GitHub logo" /></a>
                <a href="https://www.instagram.com/_manavbansal_/" target="_blank" rel="noopener"><img className="social-icon mx-2" src={instagramLogo} alt="Instagram logo" /></a>
                <a href="https://www.linkedin.com/in/manavbansal39/" target="_blank" rel="noopener"><img className="social-icon mx-2" src={linkedinLogo} alt="Instagram logo" /></a>
                <a href="Mailto: bansalmanav39@gmail.com" target="_blank" rel="noopener"><img className="social-icon mx-2" src={arrobaLogo} alt="Instagram logo" /></a>
            </div>

          </div>
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
            <div className="image-box">
              <img
                src="/Images/Manav.jpg"
                alt="Manav's Portrait"
                className="img-fluid rounded"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}