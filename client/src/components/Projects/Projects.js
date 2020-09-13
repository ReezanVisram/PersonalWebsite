import React from "react";
import "./Projects.css";

import PictureClickable from "../PictureClickable/PictureClickable";

const Projects = ({ modalClickHandler }) => {
	return (
		<div className="projects-container">
			<div className="projects-header-container">
				<h3 className="projects-header">Projects</h3>
			</div>

			<div className="projects-featured-container">
				<PictureClickable
					click={modalClickHandler}
					isProject={true}
					isDownload={true}
					name={"NHLSimulation"}
					clickableDesc={
						"A program that takes the most up-to-date stats on every NHL player, and uses these stats to create a simulation of the 2020-2021 NHL Season"
					}
					technologies={["Python (Flask)", "HTML ", "CSS ", "JavaScript "]}
					githubLink={"https://github.com/ReezanVisram/NHLSimulation"}
					releaseLink={process.env.PUBLIC_URL + "/NHLSimulation.zip"}
				/>
				<PictureClickable
					click={modalClickHandler}
					isProject={true}
					isDownload={false}
					name={"PillsOnWheels"}
					clickableDesc={
						"An Android App for users to manage, order, and have prescriptions delivered straight to their door. PillsOnWheels is an Android app deployed on the Google Play Store."
					}
					technologies={["JavaScript (React Native) ", "Python (Flask) "]}
					githubLink={"https://github.com/ReezanVisram/PillsOnWheels"}
					releaseLink={
						"https://play.google.com/store/apps/details?id=com.Visram_INC.PillsOnWheels&hl=en"
					}
				/>
				<PictureClickable
					click={modalClickHandler}
					isProject={true}
					isDownload={false}
					name={"Complete Crisis Coverage"}
					clickableDesc={
						"A website where users can see COVID-19 Statistics from all over the world, as well as read firsthand stories of how COVID-19 has affected people globally."
					}
					technologies={[
						"Python (Flask) ",
						"JavaScript (Chart.js) ",
						"CSS (Bootstrap) ",
						"HTML ",
					]}
					githubLink={"https://github.com/ReezanVisram/CompleteCrisisCoverage"}
					releaseLink={"http://www.reezanvisram.com/completecrisiscoverage"}
				/>
				<PictureClickable
					click={modalClickHandler}
					isProject={true}
					isDownload={false}
					name={"ImproveMint"}
					clickableDesc={
						"A self-improvement website where users can track tasks and habits they want to build."
					}
					technologies={["Python (Flask)", "HTML ", "CSS ", "JavaScript "]}
					githubLink={"https://github.com/ReezanVisram/ImproveMint"}
					releaseLink={"http://www.reezanvisram.com/improvemint"}
				/>
				<PictureClickable
					click={modalClickHandler}
					isProject={true}
					isDownload={false}
					name={"Project-Euler"}
					clickableDesc={
						"A collection of programs used to solve various Project-Euler problems."
					}
					technologies={["Python"]}
					githubLink={"https://github.com/ReezanVisram/Project-Euler"}
					releaseLink={"https://projecteuler.net/"}
				/>
				<PictureClickable
					click={modalClickHandler}
					isProject={true}
					isDownload={true}
					name={"Pharmaceutica"}
					clickableDesc={
						"A game where you control a Pharmaceutical Company racing to develop a vaccine for COVID-19"
					}
					technologies={["Unity Game Engine", "C#"]}
					githubLink={"https://github.com/ReezanVisram/Pharmaceutica"}
					releaseLink={process.env.PUBLIC_URL + "Pharmaceutica.zip"}
				/>
			</div>
		</div>
	);
};

export default Projects;
