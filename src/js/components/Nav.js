import React from "react";
import NavLink from "./NavLink";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hash = {
      Home: "index.html",
      About: "#",
      Resume: "#",
      Projects: "#"
    };

    let navLinkList = [];
    for (let name in hash)
      navLinkList.push(<NavLink linkName={name} link={hash[name]} />);

    return (
      <nav className="nav-container">
        <a className="brand" href="index.html">
          Tony
        </a>
        <ul className="navbar">{navLinkList}</ul>
      </nav>
    );
  }
}
