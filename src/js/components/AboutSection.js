import React from "react";
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
          <div className="about-info">
            <ul>
              {infoHash.map(obj => {
                return (
                  <li>
                    <p>
                      <b>{obj.key + ":"}</b>
                    </p>
                  </li>
                );
              })}
            </ul>
            <ul>
              {infoHash.map(obj => {
                return (
                  <li>
                    <p>{obj.value}</p>
                  </li>
                );
              })}
            </ul>
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
