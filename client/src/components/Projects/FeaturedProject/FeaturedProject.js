import React from 'react';
import './FeaturedProject.css'

import Modal from '../Modal/Modal';
import ProjectTechnology from './ProjectTechnology/ProjectTechnology';

const FeaturedProject = ({ click, projectName, projectDescription, projectTechnologies, projectLink, releaseLink }) => {

    return (
        <figure className="featuredProject-container" onClick={() => click(projectName, projectDescription, projectTechnologies, projectLink, releaseLink)}>
            <img className="featuredProject-screenshot" src={require('../../../images/' + String(projectName) + '.png')} />

            <figcaption>
                <h1>{projectName}</h1>
                {projectDescription}
            </figcaption>
        </figure>


    )
}

export default FeaturedProject;
