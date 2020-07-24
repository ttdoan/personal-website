import React from "react";
import Section from "./base/Section";
import ResumeDoc from "../../../assets/Resume.doc";
import ResumeItem from "./ResumeItem";

let resumeItems = [
  {
    date: "JAN 2020 - Present",
    position: "Full Stack Developer",
    desc: [
      "Created website from scratch using the following technologies: HTML, CSS / Flexbox / Grid, JavaScript, Font Awesome, ReactJS, and Redux",
      "Deployed ecommerce website on Heroku, backend powered by Express and MongoDB and frontend implemented using hydration of React components for SEO optimization and fast initial page loading",
      "Utilized development tools such as Npm, webpack, Sass, Git, Babel, Font Awesome, and Postman",
      "Designed responsive client-facing UI using mobile-first strategy with React, Redux, and React Router to match backend routing",
      "Tested frontend for compatibility on major browsers including Chrome, Firefox, and Microsoft Edge",
      "React component reusability using higher-order components, composition and functional hooks",
      "Engaging consecutive animations using a combination of CSS3 animations and transitions via dynamic classes",
      "Support for different events, including TouchEvent, MouseEvent and custom drag and drop events",
      "Implemented backend user registration system, including security such as password hashing, dynamic salting and session persistence using auth/refresh JWT’s",
      "Responsible for developing RESTful API’s, backend routes and controllers, and created/conducted automated API test suites using Postman",
      "Architected DB schema for storing user info and inventory data, modeled on Express using Mongoose",
      <span key="resume-item-github-personal-website">
        Personal website:{" "}
        <a
          href="https://ttdoan.github.io/personal-website/dist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ttdoan.github.io/personal-website/dist/
        </a>
      </span>,
      <span key={"resume-item-github-memory-game"}>
        Web application:{" "}
        <a
          href="https://ttdoan.github.io/web-app-memory-game/dist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ttdoan.github.io/web-app-memory-game/dist/
        </a>
      </span>
    ]
  },

  {
    date: "JUN 2012 - DEC 2019",
    position: "Intel Corporation - Presilicon Validation Engineer",
    desc: [
      "Designed and developed UVM tests to validate next-generation 3DXP memory controller SoC RTL design",
      "Took on multiple roles across several SoC projects, managing and completing tasks in a timely manner to deliver quality validation",
      "Collaborated with multi-site teams to define RTL solutions, such as post-silicon debug, manufacturing OTP (one-time programming) features, and performance monitoring",
      "Created Python and Perl scripts for automation, such as parsing CSV/XML files to generate testbench collaterals",
      "Designed proof-of-concept Python integration with SystemVerilog to reduce frequency of testbench comilation cycles and increase team's work efficiency",
      "Ownership of platform co-simulation, validating multiple RTL models in a single testbench",
      "Mentored fellow coworkers on technical validation automation methodology, and time management skills"
    ]
  },

  {
    date: "DEC 2014 - 2016",
    position: "Scrots - Software Programmer",
    desc: [
      "A published mobile game developed using the game engine libGDX for cross-platform development",
      "Designed the UI, in-game currency system, integration of RPG elements (such as items and ranks) and Google Achievements/Leaderboard, and developed half of the core gamplay mechanics",
      "Game mechanics is high-score centric with core gameplay of popping moving dots with various effects, special abilities, and a point system for unlock further advance features"
    ]
  },

  {
    date: "JUN 2013",
    position: "Tessa - Firmware Programmer",
    desc: [
      "One of four-member team to develop a sleep detection prototype for motor vehicles as part of senior design project",
      "Utilizes the Microsoft Kinect to capture eye movement for signs of drowsiness, interfaces with Arduino, which is responsible for triggering stimulus that requires the driver's timely response, and activates gradual fade-in alarm to prevent startling the driver if failure to comply",
      "Responsible for programming Arduino interface, integration of alarm system with breadboard circuitry, and assisted with stimulus trigger, which is a projection of a simple moving object onto windshield"
    ]
  }
];

export default class ResumeSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let resumeInstances = [];
    for (let i = 0; i < resumeItems.length; i++) {
      resumeInstances.push(
        <ResumeItem
          key={resumeItems[i].date + resumeItems[i].position}
          instanceId={i}
          date={resumeItems[i].date}
          position={resumeItems[i].position}
          desc={resumeItems[i].desc}
        />
      );
    }

    let content = (
      <>
        <div className="resume-container">
          {resumeInstances}
          <div className="download-wrapper">
            <a href={ResumeDoc} alt="Resume download" className="download">
              Download Resume
            </a>
          </div>
        </div>
      </>
    );

    return (
      <>
        <Section id={this.props.id} title="Resume" content={content} />
      </>
    );
  }
}
