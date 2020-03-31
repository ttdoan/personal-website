import React from "react";
import PropTypes from "prop-types";

export default class ResumeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="resume-item">
          <span className="date">{this.props.date}</span>
          <p className="company-position">{this.props.position}</p>
          <ul className="desc">
            {this.props.desc.map(desc => {
              return <li key={desc}>{desc}</li>;
            })}
          </ul>
        </div>
      </>
    );
  }
}

ResumeItem.propTypes = {
  date: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  desc: PropTypes.array.isRequired
};
