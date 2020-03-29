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
import "../scss/about.scss";
import "../scss/skills.scss";
import "../scss/footer.scss";
import "owl.carousel/dist/assets/owl.carousel.min.css";
// import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

class Website extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sections = [
      {
        name: "Home",
        id: "home",
        section: <HomeSection id="home" />
      },

      {
        name: "About",
        id: "about",
        section: <AboutSection id="about" />
      },

      {
        name: "Skills",
        id: "skills",
        section: <SkillsSection id="skills" />
      },

      {
        name: "Resume",
        id: "resume",
        section: <ResumeSection id="resume" />
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
        section: <ContactSection id="contact" />
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

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true
  });
});
