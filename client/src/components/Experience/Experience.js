import React from "react";
import "./Experience.css";

const Experience = () => {
	const showTutorDiv = () => {
		const tutorDiv = document.querySelector(".experience-tutor");
		const campDiv = document.querySelector(".experience-camp");
		tutorDiv.hidden = false;
		campDiv.hidden = true;
	};

	const showCampDiv = () => {
		const tutorDiv = document.querySelector(".experience-tutor");
		const campDiv = document.querySelector(".experience-camp");
		tutorDiv.hidden = true;
		campDiv.hidden = false;
	};

	return (
		<div className="experience-container">
			<div className="experience-header-container">
				<h3 className="experience-header">Experience</h3>
			</div>

			<div className="experience-job-container">
				<ul className="job-title-button-list">
					<li>
						<button
							className="experience-job-location-button"
							onClick={showTutorDiv}
						>
							Dunbarton High School
						</button>
					</li>
					<li>
						<button
							className="experience-job-location-button"
							onClick={showCampDiv}
						>
							City of Pickering
						</button>
					</li>
				</ul>

				<div className="experience-job-desc-container">
					<div className="experience-tutor">
						<h3>Math and Science Tutor at Dunbarton High School</h3>
						<p>October 2018 - ongoing</p>

						<ul className="experience-job-skills-list">
							<li>
								Conducted one on one learning sessions for Mathematics and
								Science.
							</li>
							<li>
								Planned individual programs for students of different abilities.
							</li>
							<li>
								Evaluated student progress and provided academic counseling as
								needed.
							</li>
						</ul>
					</div>

					<div className="experience-camp" hidden>
						<h3>Assistant Summer Camp Counsellor at the City of Pickering</h3>
						<p>Summer 2017 & Summer 2018</p>

						<ul className="experience-job-skills-list">
							<li>
								Directed daily functions for summer camp dedicated to creating
								engaging recreational opportunities for children.
							</li>
							<li>
								Organized and led small and large group activities such as
								crafts, nature, songs, games, swimming and opening and closing
								ceremonies.
							</li>
							<li>
								Awarded top assistant counsellor for the adventure camp for
								demonstrating superior performance. (Summer 2018)
							</li>
							<li>
								Awarded most improved assistant counsellor award (Summer 2017)
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
