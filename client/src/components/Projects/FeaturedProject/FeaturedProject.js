import React from 'react';
import './FeaturedProject.css'

import ProjectTechnology from './ProjectTechnology/ProjectTechnology';

const FeaturedProject = ({ projectName, projectDescription, projectTechnologies, projectLink }) => {


    return (
        <div className="featuredProject-container">
            <div>
                <h2>Featured Project: {projectName}</h2>
                <a href={projectLink}>
                    <img className="featuredProject-screenshot" src={require('../../../images/' + String(projectName) + '.png')} />
                </a>
            </div>

            <div className="featuredProject-description-container">
                <h3>{projectDescription}</h3>

                <ProjectTechnology techs={projectTechnologies} />
            </div>

        </div>
    )
}

export default FeaturedProject;
