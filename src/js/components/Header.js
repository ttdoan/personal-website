import React from "react";
import Brand from "./Brand";
import NavLink from "./NavLink";
import NavMenuButton from "./NavMenuButton";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleMenu: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return { toggleMenu: !state.toggleMenu };
    });
  }

  render() {
    let navLinkList = [];
    // TODO: need to add "key" prop for list items
    for (let name in this.props.sections)
      navLinkList.push(
        <NavLink
          linkName={name}
          link={this.props.sections[name]}
          className="navlink"
        />
      );

    return (
      <header>
        <nav className="nav-container">
          <Brand />
          <div
            className={
              "navbar" + (this.state.toggleMenu ? " menu-list-toggle" : "")
            }
          >
            <NavMenuButton
              classes={
                "navbar-menu-button" +
                (this.state.toggleMenu ? " menu-btn-animate" : "")
              }
              handleClick={this.handleClick}
            />

            <ul className="navbar-menu-list">{navLinkList}</ul>
          </div>
        </nav>
      </header>
    );
  }
}
