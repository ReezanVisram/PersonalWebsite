import React from 'react';
import './Modal.css';

import { LinkOutlined, DownloadOutlined, GithubOutlined } from '@ant-design/icons';

const Modal = ({ show, isDownload, isProject, name, description, technologies, githubLink, releaseLink }) => {
    let modalClasses = 'modal';
    let modalContent;

    if (isProject) {
        let runIcon;

        if (isDownload) {
            runIcon = <a href={releaseLink} download><DownloadOutlined color="#D2Bd45" /></a>
        } else {
            runIcon = <a href={releaseLink}><LinkOutlined color="#D2Bd45" /></a>
        }

        const techs = technologies.map((tech) => <li>{tech}</li>);

        modalContent = (
            <div className="modal-content-container">
                <p>{description}</p>

                <div className="modal-techs-container">
                    <h2>Built Using:</h2>
                    <ul className="modal-techs-list">{techs}</ul>
                </div>

                <div className="modal-icons-container">
                    <a href={githubLink}>
                        <GithubOutlined color="#D2BD45" />
                    </a>

                    {runIcon}
                </div>
            </div>
        )
    } else {
        modalContent = (
            <div className="modal-content-container">
                <p>{description}</p>
            </div>
        )
    }


    if (show) {
        modalClasses = 'modal open';
    }

    return (
        <div className={modalClasses}>
            <div className="modal-header">
                <h1>{name}</h1>
            </div>

            {modalContent}

        </div>
    )
}

export default Modal;