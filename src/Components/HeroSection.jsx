import React from "react";
import "../CSS/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row hero-content text-white align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="hero-title mb-3">
              Hi, I’m <span className="highlight">Manav Bansal</span>
            </h1>
            <p className="hero-text">
              ntium vitae. Quaerat culpa recusandae distinctio dolor expedita. 
              Harum architecto nihil tempora velit veritatis!
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="image-box">
              <img
                src="/Manav.jpg"
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