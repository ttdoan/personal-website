import React from "react";
import PropTypes from "prop-types";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tempStyle = {
      height: "1000px",
      color: "white"
    };

    return (
      <section id={this.props.id} style={tempStyle}>
        <div className="overlay"></div>
        <p>This is a section.</p>
      </section>
    );
  }
}

Section.propTypes = {
  id: PropTypes.string.isRequired
};
