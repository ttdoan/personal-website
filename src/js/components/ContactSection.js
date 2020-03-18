import React from "react";
import Section from "./Section";

export default class ContactSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = (
      <>
        <div className="contact-container">
          <p className="message">
            I would love to hear from you! Send me a message and I will respond
            as soon as possible!
          </p>
          <script
            type="text/javascript"
            defer
            src="//www.123formbuilder.com/embed/5345151.js"
            data-role="form"
            data-default-width="650px"
          ></script>
        </div>
      </>
    );

    return (
      <>
        <Section id={this.props.id} title="Contact Me" content={content} />
      </>
    );
  }
}
