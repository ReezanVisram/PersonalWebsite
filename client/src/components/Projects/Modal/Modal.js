import React from 'react';
import './Modal.css';

import { CaretRightFilled, GithubOutlined } from '@ant-design/icons';

import ProjectTechnology from '../FeaturedProject/ProjectTechnology/ProjectTechnology';

const Modal =({ show, projectName, projectDescription, projectTechnologies, projectReleaseLink, projectGithubLink }) => {
    let modalClasses = 'modal';

    if (show) {
        modalClasses = 'modal open';
    }

    return (
        <div className={modalClasses}>
            <div className="modal-text-container">
                <h1>{projectName}</h1>

                <p>{projectDescription}</p>

                <h2>Technologies Used: </h2>
                <ProjectTechnology techs={projectTechnologies} />
            </div>


            <div className="modal-icons-container">
                <a className="modal-github-icon" href={projectGithubLink}>
                    <GithubOutlined color="#D2Bd45" />
                </a>

                <div className="spacer" />

                <a className="modal-download-icon" href={projectReleaseLink}>
                    <CaretRightFilled color="#D2Bd45" />
                </a>
            </div>

        </div>
    )
}

export default Modal;