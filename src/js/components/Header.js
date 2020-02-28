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
          <ul className="navbar">{navLinkList}</ul>
        </nav>
      </header>
    );
  }
}
