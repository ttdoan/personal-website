import React from "react";
import Section from "./base/Section";
import profile from "../../../assets/images/profile1.png";

export default class HomeSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = (
      <>
        <div
          className="home-container"
          style={{ backgroundImage: `url(${profile})` }}
        >
          <div className="text-container">
            <h2>Hello! i'm</h2>
            <h1>
              <span className="highlight">TONY DOAN</span>
            </h1>
            <br></br>
            <ul>
              <li> Web UI/UX Design</li>
              <li> Mobile-First Approach</li>
              <li> Responsive UI</li>
              <li> Mobile App Developer</li>
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <a href="#contact">Hire Me!</a>
          </div>
        </div>
      </>
    );

    return (
      <>
        <Section id={this.props.id} content={content} />
      </>
    );
  }
}
