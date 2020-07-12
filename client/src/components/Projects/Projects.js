import React from 'react';
import './Projects.css';

import FeaturedProject from './FeaturedProject/FeaturedProject';

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-header-container">
                <h3 className="projects-header">Projects</h3>
            </div>

            <div class="projects-featured-container">
                <FeaturedProject projectName={"NHLSimulation"} projectDescription={"An NHL Simulation"} projectTechnologies={["Python", "Kivy"]} projectLink={"https://github.com/ReezanVisram/NHLSimulation"} />
                <FeaturedProject projectName={"Improve-Mint"} projectDescription={"An Improve-Mint"} projectTechnologies={["Python", "Flask", "HTML", "CSS"]} projectLink={"https://github.com/ReezanVisram/Improve-Mint"} />
            </div>
        </div>
    )
}

export default Projects;