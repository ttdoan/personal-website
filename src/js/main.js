import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "../css/style.css";

class Website extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Section id="home" />
        <Section id="about" />
        <Footer />
      </>
    );
  }
}

ReactDOM.render(<Website />, document.body);
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
