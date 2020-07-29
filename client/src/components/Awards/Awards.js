import React from 'react';

import './Awards.css';

import PictureClickable from '../PictureClickable/PictureClickable';

const Awards = ({ modalClickHandler }) => {
    return (
        <div className="awards-container">
            <div className="awards-header-container">
                <h3 className="awards-header">Awards</h3>
            </div>

            <div className="awards-featured-container">
                <PictureClickable click={() => {return}} isProject={false} name={"Valedictorian - Grade 8"} description={"Chosen as the Valedictorian for the 2017 Graduating Class at Highbush Public School"} />
                <PictureClickable click={() => {return}} isProject={false} name={"General Proficiency - Grade 9"} description={"Awarded to the student with the highest average across all subjects in Grade 9 at Dunbarton High School"} />
                <PictureClickable click={() => {return}} isProject={false} name={"General Proficiency - Grade 10"} description={"Awarded to the student with the highest average across all subjects in Grade 10 at Dunbarton High School"} />
            </div>
        </div>
    )
}

export default Awards;