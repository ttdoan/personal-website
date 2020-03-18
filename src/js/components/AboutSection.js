import React from "react";
import profile from "../../../assets/images/profile.jpg";
import Section from "./Section";

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
          <img src={profile} alt="Profile"></img>
          <div className="about-info">
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

    return (
      <>
        <Section id={this.props.id} title="About Me" content={content} />
      </>
    );
  }
}
