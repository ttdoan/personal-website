import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "../css/style.css";
import "../scss/home.scss";
import "../scss/about.scss";
import "../scss/skills.scss";
import "../scss/resume.scss";
import "../scss/footer.scss";

class Website extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sections = [
      {
        name: "Home",
        id: "home",
        section: <HomeSection key="home" id="home" />
      },

      {
        name: "About",
        id: "about",
        section: <AboutSection key="about" id="about" />
      },

      {
        name: "Skills",
        id: "skills",
        section: <SkillsSection key="skills" id="skills" />
      },

      {
        name: "Resume",
        id: "resume",
        section: <ResumeSection key="resume" id="resume" />
      },

      // TODO: need to create project section..
      /*
      {
        name: "Projects",
        id: "projects",
        section: <Section id={this.id} />
      },
      */

      {
        name: "Contact",
        id: "contact",
        section: <ContactSection key="contact" id="contact" />
      }
    ];

    return (
      <>
        <Header sections={sections} />
        {sections.map(obj => {
          return obj.section;
        })}
        <Footer />
      </>
    );
  }
}

ReactDOM.render(<Website />, document.getElementById("react-container"));
