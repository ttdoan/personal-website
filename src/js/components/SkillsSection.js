import React from "react";
import Section from "./Section";

export default class SkillsSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = <></>;
    return (
      <>
        <Section id={this.props.id} title="Skills" content={content} />
      </>
    );
  }
}
