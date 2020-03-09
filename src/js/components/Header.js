import React from "react";
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
    let hash = {
      Home: "#home",
      About: "#about",
      Resume: "#",
      Projects: "#"
    };

    let navLinkList = [];
    // TODO: need to add "key" prop for list items
    for (let name in hash)
      navLinkList.push(
        <NavLink linkName={name} link={hash[name]} className="navlink" />
      );

    return (
      <header>
        <nav className="nav-container">
          <a className="brand" href="index.html">
            Tony
          </a>

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
