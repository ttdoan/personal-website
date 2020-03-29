import React from "react";
import Section from "./base/Section";
import Profile1 from "../../../assets/images/profile1.jpg";
import Profile2 from "../../../assets/images/profile2.jpg";

export default class HomeSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = (
      <>
        <div className="home-container owl-carousel owl-theme owl-loaded">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <div className="owl-item">
                <img src={Profile1} alt="Profile 1"></img>
              </div>
              <div className="owl-item">
                <img src={Profile2} alt="Profile 2"></img>
              </div>
            </div>
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
