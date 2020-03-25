import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.state = this.setDefault();
  }

  onFocusHandler(ev) {
    const prevBorder = ev.target.style.border;

    ev.target.style.border = "solid skyblue 1.5px";
    this.setState(state => {
      state.prevBorder = prevBorder;
      return state;
    });
  }

  blurHandler(ev) {
    ev.target.style.border = this.state.prevBorder;
  }

  setDefault() {
    return {
      nameValid: true,
      email: {
        empty: false,
        valid: true
      },
      msgValid: true,
      prevBorder: null,
      submit: ""
    };
  }

  render() {
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mlelnaaz"
        method="POST"
        className="form"
        noValidate
      >
        <input
          type="text"
          name="name"
          id="contact-form-name"
          aria-label="Name"
          placeholder="Enter Name"
          onFocus={this.onFocusHandler}
          onBlur={this.blurHandler}
        />
        {!this.state.nameValid && (
          <p className="required-field">This field is required.</p>
        )}
        <input
          type="email"
          name="email"
          id="contact-form-email"
          aria-label="Email"
          placeholder="Enter Email"
          onFocus={this.onFocusHandler}
          onBlur={this.blurHandler}
        />
        {this.state.email.empty && (
          <p className="required-field">This field is required.</p>
        )}
        {!this.state.email.valid && (
          <p className="required-field">Invalid email address.</p>
        )}
        <textarea
          name="message"
          id="contact-form-message"
          aria-label="Messsage"
          placeholder="Enter Message"
          onFocus={this.onFocusHandler}
          onBlur={this.blurHandler}
        />
        {!this.state.msgValid && (
          <p className="required-field">This field is required.</p>
        )}
        {this.state.submit === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button>Submit</button>
        )}
        {this.state.submit === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();

    const form = ev.target;
    const nameField = form.querySelector("#contact-form-name");
    const emailField = form.querySelector("#contact-form-email");
    const msgField = form.querySelector("#contact-form-message");

    let keyframes = [
      { transform: "translateY(0)" },
      { transform: "translateY(0)" },
      { transform: "translateY(-30px)" },
      { transform: "translateY(0)" },
      { transform: "translateY(-15px)" },
      { transform: "translateY(0)" },
      { transform: "translateY(-7px)" },
      { transform: "translateY(0)" },
      { transform: "translateY(0)" }
    ];
    let duration = 1000;
    let valid = true;
    let status = this.setDefault();

    if (
      nameField.value.length == 0 ||
      emailField.value.length == 0 ||
      msgField.value.length == 0 ||
      !msgField.valid
    ) {
      valid = false;
      if (nameField.value.length == 0) {
        nameField.animate(keyframes, duration);
        nameField.style.border = "solid red 1px";
        status.nameValid = false;
      } else nameField.style.border = null;

      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailField.value.length == 0) {
        emailField.animate(keyframes, duration);
        emailField.style.border = "solid red 1px";
        status.email.empty = true;
      } else if (!re.test(String(emailField.value).toLowerCase())) {
        emailField.animate(keyframes, duration);
        emailField.style.border = "solid red 1px";
        status.email.valid = false;
      } else emailField.style.border = null;

      if (msgField.value.length == 0) {
        msgField.animate(keyframes, duration);
        msgField.style.border = "solid red 1px";
        status.msgValid = false;
      } else msgField.style.border = null;
    }

    this.setState(status);
    if (!valid) return;

    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
