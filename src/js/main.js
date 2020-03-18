import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "../css/style.css";
import "../scss/style.scss";

class Website extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sections = [
      {
        name: "Home",
        id: "home",
        section: <Section id={this.id} />
      },

      {
        name: "About",
        id: "about",
        section: <AboutSection id={this.id} />
      },

      {
        name: "Resume",
        id: "resume",
        section: <ResumeSection id={this.id} />
      },

      {
        name: "Projects",
        id: "projects",
        section: <Section id={this.id} />
      },

      {
        name: "Contact",
        id: "contact",
        section: <ContactSection id={this.id} />
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

ReactDOM.render(<Website />, document.body);

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
