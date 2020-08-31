import React from "react";
import "./App.css";

// Custom Components
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Awards from "./components/Awards/Awards";
import Footer from "./components/Footer/Footer";
import SideDrawer from "./components/Header/SideDrawer/SideDrawer";
import Backdrop from "./components/Header/Backdrop/Backdrop";
import Modal from "./components/Modal/Modal";
import Contact from "./components/Contact/Contact";

class App extends React.Component {
	state = {
		sideDrawerOpen: false,
		modalOpen: false,
		contactOpen: false,
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	modalClickHandler = (
		isProject,
		isDownload,
		name,
		clickableDesc,
		technologies,
		githubLink,
		releaseLink
	) => {
		this.setState((prevState) => {
			return {
				modalOpen: !prevState.modalOpen,
				isProject: isProject,
				isDownload: isDownload,
				name: name,
				clickableDesc: clickableDesc,
				technologies: technologies,
				githubLink: githubLink,
				releaseLink: releaseLink,
			};
		});
	};

	contactClickHandler = () => {
		this.setState((prevState) => {
			return { contactOpen: !prevState.contactOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
		this.setState({ modalOpen: false });
		this.setState({ contactOpen: false });
	};

	render() {
		let backdrop;
		let modal;
		let contact;

		if (
			this.state.sideDrawerOpen ||
			this.state.modalOpen ||
			this.state.contactOpen
		) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
		}

		if (this.state.modalOpen) {
			modal = (
				<Modal
					isProject={this.state.isProject}
					isDownload={this.state.isDownload}
					name={this.state.name}
					clickableDesc={this.state.clickableDesc}
					technologies={this.state.technologies}
					githubLink={this.state.githubLink}
					releaseLink={this.state.releaseLink}
				/>
			);
		}

		if (this.state.contactOpen) {
			contact = <Contact />;
		}

		return (
			<div style={{ height: "100%" }}>
				<Header drawerClickHandler={this.drawerToggleClickHandler} />

				<SideDrawer
					click={this.backdropClickHandler}
					show={this.state.sideDrawerOpen}
				/>
				{modal}
				{backdrop}
				{contact}

				<div style={{ marginTop: "15px" }}>
					<section id="about">
						<About />
					</section>

					<section id="projects">
						<Projects modalClickHandler={this.modalClickHandler} />
					</section>

					<section id="experience">
						<Experience />
					</section>

					<section id="awards">
						<Awards modalClickHandler={this.modalClickHandler} />
					</section>
				</div>

				<Footer
					contactClickHandler={this.contactClickHandler}
					modalClickHandler={this.modalClickHandler}
				/>
			</div>
		);
	}
}

export default App;
