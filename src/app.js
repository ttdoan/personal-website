import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Div name={1} />;
  }
}

class Div extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          My name is {this.props.name}. I am {this.props.age} years old.
        </h1>
      </div>
    );
  }
}

Div.defaultProps = {
  name: "Nameless",
  age: 0
};

Div.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

let namesList = ["Bob", "Jane", "Rick"];

ReactDOM.render(
  <App
    name={namesList}
    age={[12, 13, 14]}
    hash={{ country: "U.S.", state: "Nevada" }}
  />,
  document.getElementById("root")
);
