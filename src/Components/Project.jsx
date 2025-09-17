import React from 'react'
import backgroundImage from '../Imgs/background.jpg'
import '../CSS/Project.css'

const Project = () => {
  return (
    <div className= "project-box">
        <h1 className= "project-heading row">Project 1</h1>
        <div className='row project-content align-items-center'>
            <div className= "Project-image-container col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center">
                <img src= {backgroundImage} alt= "project-image" className= "project-image"/>
            </div>
            <div className = "col-lg-8 col-md-12 col-sm-12 pb-4">
                <p className= "project-description">
                    This is a sample project description. This project is about creating a portfolio website using React. The website showcases various projects, skills, and experiences. It is designed to be responsive and user-friendly, ensuring a seamless experience across different devices.
                </p>
                <p className= "project-technologies">
                    Technologies Used: React, CSS, HTML, JavaScript
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Project
