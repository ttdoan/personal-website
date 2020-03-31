import React from "react";
import profile from "../../../assets/images/profile2.jpg";
import Section from "./base/Section";

export default class AboutSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let infoHash = [
      { key: "Name", value: "Tony Doan" },
      { key: "Date of birth", value: "September 24, 1989" },
      {
        key: "Education",
        value:
          "B.S. in Computer Science & Engineering - University of California Irvine 2013"
      },
      { key: "Phone", value: "1-714-622-8150" },
      { key: "Email", value: "tony.thinh.doan@gmail.com" }
    ];

    let content = (
      <>
        <div className="about-container">
          <img src={profile} alt="Profile 3"></img>
          <div className="about-info">
            <h1>About Me</h1>
            <p className="intro">
              My name is Tony Doan, an accomplished software engineer with over
              8 years of experience. I have worked on multiple projects,
              undertaking challenges such as designing infrastructure for
              scalable and effective solutions, reusing and enhancing IP
              frameworks for project-specific requirements, and developing
              complex scripts for automation.
            </p>
            <p className="intro">
              I am a proven asset to my team, mentoring fellow coworkers on
              technical expertise and delivering constant quality work. I have
              worked with cross-site teams, being praised for flexibility and
              willingness to accommodate difficult work schedule. I am always
              looking for challenges as part of my pursuit of excitement and
              fulfillment.
            </p>
            {infoHash.map(obj => {
              return (
                <>
                  <p className="first-col">
                    <b>{obj.key + ":"}</b>
                  </p>
                  <p className="second-col">{obj.value}</p>
                </>
              );
            })}
          </div>
        </div>
      </>
    );

    return <Section id={this.props.id} content={content} />;
  }
}
