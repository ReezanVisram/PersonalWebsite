import React from 'react';
import './Projects.css';

import FeaturedProject from './FeaturedProject/FeaturedProject';

const Projects = ({ modalClickHandler }) => {
    return (
        <div className="projects-container">
            <div className="projects-header-container">
                <h3 className="projects-header">Projects</h3>
            </div>

            <div class="projects-featured-container">
                <FeaturedProject click={modalClickHandler} projectName={"NHLSimulation"} projectDescription={"A program that takes the most up-to-date stats on every NHL player, and uses these stats to create a simulation of the 2020-2021 NHL Season"} projectTechnologies={["Python", "Kivy"]} projectLink={"https://github.com/ReezanVisram/NHLSimulation"} /> 
                <FeaturedProject click={modalClickHandler} projectName={"PillsOnWheels"} projectDescription={"A platform for users to manage, order, and have prescriptions delivered straight to their door. PillsOnWheels is an Android app deployed on the Google Play Store."} projectTechnologies={["JavaScript (React Native)", "Python (Flask)"]} projectLink={"https://github.com/ReezanVisram/PillsOnWheels"} /> 
                <FeaturedProject click={modalClickHandler} projectName={"CompleteCrisisCoverage"} projectDescription={"A platform where users can see COVID-19 Statistics from all over the world, as well as read firsthand stories of how COVID-19 has affected people globally."} projectTechnologies={["Python (Flask)", "JavaScript (Chart.js)", "CSS (Bootstrap)", "HTML"]} projectLink={"https://github.com/ReezanVisram/Improve-Mint"} /> 
                <FeaturedProject click={modalClickHandler} projectName={"Improve-Mint"} projectDescription={"A self-improvement platform where users can track tasks and habits they want to build."} projectTechnologies={["Python", "Flask", "HTML", "CSS", "JavaScript"]} projectLink={"https://github.com/ReezanVisram/Improve-Mint"} /> 
                <FeaturedProject click={modalClickHandler} projectName={"Improve-Mint"} projectDescription={"A self-improvement platform where users can track tasks and habits they want to build."} projectTechnologies={["Python", "Flask", "HTML", "CSS", "JavaScript"]} projectLink={"https://github.com/ReezanVisram/Improve-Mint"} /> 
                <FeaturedProject click={modalClickHandler} projectName={"Improve-Mint"} projectDescription={"A self-improvement platform where users can track tasks and habits they want to build."} projectTechnologies={["Python", "Flask", "HTML", "CSS", "JavaScript"]} projectLink={"https://github.com/ReezanVisram/Improve-Mint"} /> 
            </div>
        </div>
    )
}

export default Projects;