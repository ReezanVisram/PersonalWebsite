import React from 'react';

const ProjectTechnology = ({ techs }) => {
    const listItems = techs.map((tech) => 
        <li>{tech}</li>
    );

    return <ul className="projectTechnology-ul">{listItems}</ul>
}

export default ProjectTechnology;