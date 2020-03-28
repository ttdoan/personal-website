/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <li
        className={this.props.classes ? this.props.classes : ""}
        onClick={this.props.clickFunction ? this.handleClick : null}
        onKeyDown={this.props.clickFunction ? this.handleClick : null}
        style={this.props.style ? this.props.style : null}
      >
        {this.props.content}
      </li>
    );
  }

  handleClick() {
    this.props.clickFunction(this.props.args);
  }
}
