import React from "react";
import Section from "./Section";
import ContactForm from "./ContactForm";

export default class ContactSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = (
      <>
        <div className="contact-container">
          <p className="message">
            Thank you for visiting my profile. I would love to hear from you!
            Send me a message and I will respond as soon as possible!
          </p>
          <ContactForm />
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
