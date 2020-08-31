import React from "react";
import "./FeaturedProject.css";

const PictureClickable = ({
	click,
	isProject,
	isDownload,
	name,
	clickableDesc,
	technologies,
	githubLink,
	releaseLink,
}) => {
	return (
		<figure
			className="featuredProject-container"
			onClick={() =>
				click(
					isProject,
					isDownload,
					name,
					clickableDesc,
					technologies,
					githubLink,
					releaseLink
				)
			}
		>
			<img
				className="featuredProject-screenshot"
				src={require("../../images/" + String(name) + ".png")}
				alt={name}
			/>

			<figcaption>
				<h1>{name}</h1>
				<p>{clickableDesc}</p>
			</figcaption>
		</figure>
	);
};

export default PictureClickable;
