import React from "react";
import PropTypes from "prop-types";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id={this.props.id}>
        <div className="overlay"></div>
        <div className="section-container">
          {this.props.title == "" ? "" : <h1>{this.props.title}</h1>}
          {this.props.content}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.isRequired
};
