import React from "react";
import PropTypes from "prop-types";
// import "../../css/style.css";

export default class NavLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="navlink">
        <a href={this.props.link}>{this.props.linkName}</a>
      </li>
    );
  }
}

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired
};
