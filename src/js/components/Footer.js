import React from "react";
import LIbrand from "../../../assets/images/LIbrand.png";
import GHbrand from "../../../assets/images/GHbrand.png";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="overlay"></div>
        <footer>
          <div id="ft-hdr">
            <a href="#">Return to Top</a>
          </div>
          <hr></hr>
          <div className="ft-item">
            <span>About</span>
          </div>
          <div className="ft-item-info">
            <span>
              I am a code developer with a wide range of experience, including
              mobile development, web development, and RTL design validation.
            </span>
          </div>
          <div className="ft-item">
            <span>Contact</span>
          </div>
          <div className="ft-item-info">
            <ul>
              <li>
                <a href="mailto:tony.thinh.doan@gmail.com">
                  tony.thinh.doan@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="ft-item">
            <span>Connect</span>
          </div>
          <div className="ft-item-info">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/tony-thinh-doan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={LIbrand} alt="LinkedIn Brand"></img>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ttdoan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={GHbrand} alt="Github Brand"></img>
                </a>
              </li>
            </ul>
          </div>
          <hr></hr>
          <p className="copyright">Copyright &copy;2020 All rights reserved</p>
        </footer>
      </>
    );
  }
}
