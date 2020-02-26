import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "../css/style.css";

class Website extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO: need to create a dropdown clickable menu...
    return (
      <>
        <Nav />
        <Footer />
      </>
    );
  }
}

ReactDOM.render(<Website />, document.body);
