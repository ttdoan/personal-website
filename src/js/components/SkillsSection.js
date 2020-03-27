import React from "react";
import Section from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class SkillIcon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

let icons = [
  new SkillIcon("html5", "gold"),
  new SkillIcon("css3-alt", "teal"),
  new SkillIcon("js-square", "yellow"),
  new SkillIcon("react", "lightseagreen"),
  new SkillIcon("git", "orange"),
  new SkillIcon("sass", "pink"),
  new SkillIcon("npm", "red"),
  new SkillIcon("github", "purple"),
  new SkillIcon("java", "lightblue")
];

let topics = [
  {
    name: "Languages",
    list: ["HTML", "CSS", "JavaScript", "Perl", "Java", "Python", "C/C++"]
  },
  { name: "Frameworks", list: ["React", "Flexbox", "Grid", "UVM", "libGDX"] },
  {
    name: "Tools",
    list: [
      "Npm",
      "webpack",
      "Sass",
      "Babel",
      "Prettier",
      "Git",
      "Github",
      "Vim"
    ]
  },
  { name: "Operating Systems", list: ["Linux", "Windows"] }
];

export default class SkillsSection extends React.Component {
  constructor(props) {
    super(props);

    this.updateMargin = this.updateMargin.bind(this);
    this.updateIcon = this.updateIcon.bind(this);
    this.state = {
      fontSize: 50,
      margin: undefined
    };
    this.state.margin = this.updateMargin();
  }

  render() {
    let content = (
      <>
        <div className="skills-container">
          <ul className="skills-icon-list">
            {icons.map(icon => {
              return (
                <li key={icon}>
                  <FontAwesomeIcon
                    key={icon}
                    icon={["fab", icon.name]}
                    style={{
                      fontSize: this.state.fontSize + "px",
                      marginLeft: this.state.margin,
                      marginRight: this.state.margin,
                      color: icon.color
                    }}
                  />
                </li>
              );
            })}
          </ul>
          <div>
            <div className="skills-features-list">
              <ul>
                {topics.map(obj => {
                  return <li className="skills-feature">{obj.name}</li>;
                })}
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </>
    );

    return (
      <>
        <Section id={this.props.id} title="Skills" content={content} />
      </>
    );
  }

  updateMargin() {
    const iconWidth = this.state.fontSize;
    let width = parseInt(document.body.clientWidth) - 10 * 2;
    let iconsPerRow = width / (iconWidth + 10);
    if (iconsPerRow < icons.length) {
      let tmp = icons.length;
      let rows = 2;
      while (tmp / rows > iconsPerRow) rows++;
      iconsPerRow = tmp / rows;
    }
    let marginPerIcon = (width - iconsPerRow * iconWidth) / icons.length;

    return marginPerIcon / 2;
  }

  updateIcon() {
    let newMargin = this.updateMargin();
    let list = document.getElementsByClassName("skills-icon");
    for (let i = 0; i < list.length; i++) {
      list[i].style.marginLeft = newMargin + "px";
      list[i].style.marginRight = newMargin + "px";
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateIcon);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIcon);
  }
}
