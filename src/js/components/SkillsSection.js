import React from "react";
import Section from "./Section";
import ListItem from "./base/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class SkillIcon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.itemList = null;
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

let features = [
  {
    name: "Languages",
    list: [
      "HTML",
      "CSS",
      "JavaScript",
      "Perl",
      "Java",
      "Python",
      "C/C++",
      "SystemVerilog"
    ]
  },
  {
    name: "Frameworks",
    list: ["React", "Flexbox", "Grid", "UVM", "libGDX"]
  },
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

    this.updateSelected = this.updateSelected.bind(this);
    this.computeMargin = this.computeMargin.bind(this);
    this.updateIcon = this.updateIcon.bind(this);
    this.computeFeatureItemFontSize = this.computeFeatureItemFontSize.bind(
      this
    );
    this.updateFeatureItemFontSize = this.updateFeatureItemFontSize.bind(this);
    this.state = {
      iconFontSize: 50,
      margin: undefined,
      selected: features[0].name,
      featureItemFontDivider: 25
    };
    this.state.margin = this.computeMargin();
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
                      fontSize: this.state.iconFontSize + "px",
                      marginLeft: this.state.margin,
                      marginRight: this.state.margin,
                      color: icon.color
                    }}
                  />
                </li>
              );
            })}
          </ul>
          <div className="skills-features-container">
            <div className="skills-features-list">
              <ul>
                {features.map(obj => {
                  return (
                    <ListItem
                      key={obj.name}
                      classes={
                        "skills-feature" +
                        (this.state.selected === obj.name ? " selected" : "")
                      }
                      clickFunction={this.updateSelected}
                      args={obj.name}
                      content={obj.name}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="skills-feature-items">
              {features.map(obj => {
                return (
                  <ul
                    key={"feature-item-list-" + obj.name}
                    className={
                      "feature-item-list" +
                      (this.state.selected === obj.name ? "" : " hidden")
                    }
                  >
                    {obj.list.map(item => {
                      return (
                        <ListItem
                          key={obj.name + "-" + item}
                          content={item}
                          classes={"feature-item"}
                          style={{
                            fontSize: this.computeFeatureItemFontSize() + "px"
                          }}
                        />
                      );
                    })}
                  </ul>
                );
              })}
            </div>
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

  updateSelected(name) {
    this.setState(state => {
      state.selected = name;
      return state;
    });
  }

  computeMargin() {
    const iconWidth = this.state.iconFontSize;
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
    let newMargin = this.computeMargin();
    let list = document.getElementsByClassName("skills-icon");
    for (let i = 0; i < list.length; i++) {
      list[i].style.marginLeft = newMargin + "px";
      list[i].style.marginRight = newMargin + "px";
    }
  }

  computeFeatureItemFontSize() {
    return document.body.clientWidth / this.state.featureItemFontDivider;
  }

  updateFeatureItemFontSize() {
    let list = document.getElementsByClassName("feature-item");
    for (let i = 0; i < list.length; i++)
      list[i].style.fontSize = this.computeFeatureItemFontSize() + "px";
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateIcon);
    window.addEventListener("resize", this.updateFeatureItemFontSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIcon);
  }
}
