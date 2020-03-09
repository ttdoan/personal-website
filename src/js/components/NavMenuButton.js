import React from "react";

export default class NavMenuButton extends React.Component {
  constructor(props) {
    super(props);

    this.clicked = this.clicked.bind(this);
    this.state = {
      active: false
    };
  }

  clicked() {
    this.setState(state => {
      return { active: !state.active };
    });
  }

  render() {
    return (
      <button className={this.props.classes} onClick={this.props.handleClick}>
        <div className="menu-button-icon">
          <div className="icon-bar1"></div>
          <div className="icon-bar2"></div>
          <div className="icon-bar3"></div>
        </div>
      </button>
    );
  }
}
