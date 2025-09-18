import React from 'react'
import '../CSS/Projects.css'
import Project from './Project'
import backgroundImage from '../Imgs/background.jpg'

const Projects = () => {
  return (
    <div className= "project-page-container" >
      <h1 className= "heading">Projects Page</h1>
      <Project
        title="Portfolio Website"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum debitis consectetur neque ipsa omnis non enim, illo facilis officia quaerat architecto perspiciatis quas nihil nesciunt quidem consequatur! Illo velit esse consectetur nemo aliquam officia quod sed dolore necessitatibus. Aut nulla aliquam, reprehenderit officiis id obcaecati ea facilis eveniet veniam. Necessitatibus fuga in enim aperiam harum veniam, maxime magnam. Delectus totam facere ut, nesciunt inventore labore eos! Officiis, accusantium illum! Ullam accusamus, nulla architecto, dignissimos obcaecati consequatur ad reiciendis modi est, autem debitis necessitatibus. Nobis culpa impedit natus ea distinctio soluta quos corporis molestias, obcaecati nihil similique nemo dolorem possimus nisi."
        technologies={["React", "CSS", "JavaScript", "Bootstrap"]}
        image={backgroundImage}
        github="https://github.com/yourusername/portfolio"
        website="https://yourwebsite.com"
/>
    </div>
  )
}

export default Projects
