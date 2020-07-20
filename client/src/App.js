import React from 'react';
import './App.css';

// Custom Components
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import SideDrawer from './components/Header/SideDrawer/SideDrawer';
import Backdrop from './components/Header/Backdrop/Backdrop';
import Modal from './components/Projects/Modal/Modal';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    modalOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  }

  modalClickHandler = (projectName, projectDescription, projectTechs, githubLink, releaseLink) => {
    console.log(projectName);
    this.setState((prevState) => {
      return {modalOpen: !prevState.modalOpen, currProjectName: projectName, currProjectDescription: projectDescription, currProjectTechs: projectTechs, currGithubLink: githubLink, currReleaseLink: releaseLink}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
    this.setState({modalOpen: false});
  }

  render() {
    let backdrop;
    let modal;

    if (this.state.sideDrawerOpen || this.state.modalOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    if (this.state.modalOpen) {
      modal = <Modal projectName={this.state.currProjectName} projectDescription={this.state.currProjectDescription} projectTechnologies={this.state.currProjectTechs} projectGithubLink={this.state.currGithubLink} />
    }

    return (
      <div style={{height: "100%"}}>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
  
        <SideDrawer click={this.backdropClickHandler} show={this.state.sideDrawerOpen} />
        {modal}
        {backdrop}

      
        <div style={{marginTop: "15px"}}>
          <About />
  
          <Projects modalClickHandler={this.modalClickHandler} />
  
          <Experience />
        </div>

        <Footer />
  
      </div>
    );
  }
}

export default App;
