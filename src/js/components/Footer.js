import React from "react";
import Brand from "./Brand";
import LIbrand from "../../images/LIbrand.png";
import GHbrand from "../../images/GHbrand.png";

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
            <Brand />
            <a href="#">Return to Top</a>
          </div>
          <hr></hr>
          <div>
            <ul>
              <li></li>
              <li>
                <a
                  href="https://www.linkedin.com/in/tony-thinh-doan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={LIbrand} alt="LinkedIn Brand"></img>
                </a>
                <a
                  href="https://github.com/ttdoan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={GHbrand} alt="Github Brand"></img>
                </a>
              </li>
              <li>
                <span>Email: tony.thinh.doan@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>this is second div</div>
          <div> this is third div</div>
          <hr></hr>
          <p className="copyright">Copyright &copy;2020 All rights reserved</p>
        </footer>
      </>
    );
  }
}
