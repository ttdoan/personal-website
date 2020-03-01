import React from "react";
import NavLink from "./NavLink";
import NavMenuButton from "./NavMenuButton";

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

          <div className="navbar">
            <NavMenuButton />
            <ul className="navbar-menu-list">{navLinkList}</ul>
          </div>
        </nav>
      </header>
    );
  }
}
