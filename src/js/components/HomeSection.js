import React from "react";
import Section from "./base/Section";

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
              <div className="owl-item">this is one div</div>
              <div className="owl-item">this is second div</div>
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
