import React from "react";
import NavLink from "./NavLink";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
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

    // TODO: need to create a dropdown clickable menu...

    return (
      <header>
        <nav className="nav-container">
          <a className="brand" href="index.html">
            Tony
          </a>
          <button className="menu">
            <div className="menu-icon">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span>Menu</span>
          </button>

          <ul className="navbar">{navLinkList}</ul>
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </label>
            <em>Enable Dark Mode!</em>
          </div>
        </nav>
      </header>
    );
  }
}
