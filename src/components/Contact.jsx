import React, { useState } from "react";
import { isValidPhone, isValidEmail } from "../utils/formValidation";
import "../styles/contact.css";

export default function Contact() {
  // State variables for form input and errors
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Form validation
  const validateInputs = () => {
    const newErrors = {};

    // Name validation
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Phone validation
    if (phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhone(phone)) {
      newErrors.phone = "Provide a valid phone number";
    }

    // Email validation
    if (email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Provide a valid email address";
    }

    // Message validation
    if (message.trim() === "") {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // Check if there are no errors\
    return Object.values(newErrors).every((error) => error === "");
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      // FIXME submission logic
      console.log("form submitted successfully");
    } else {
      console.log("form validation failed");
    }
  };

  return (
    <main>
      <section className="contact">
        <section className="contact__info">
          <h2>Contact Info</h2>
          <p>888.888.8888</p>
          <p>info@humil.com</p>
          <p>
            1234 Humil Dr,
            <br />
            Charlotte, NC 28215
          </p>
        </section>
        <form className="contact__form" id="form" onSubmit={handleSubmit}>
          <div className="contact__form--items contact__form--padding">
            <label htmlFor="name">Name</label>
            <div className="contact__form--item">
              <input
                type="text"
                id="name"
                size="30"
                placeholder="John Doe"
                onChange={handleNameChange}
              />
              <div className="error">{errors.name}</div>
            </div>
          </div>
          <div className="contact__form--items contact__form--padding">
            <label htmlFor="phone">Phone Number</label>
            <div className="contact__form--item">
              <input
                type="tel"
                id="phone"
                size="30"
                placeholder="(888)-888-8888"
                maxLength="16"
                onChange={handlePhoneChange}
              />
              <div className="error">{errors.phone}</div>
            </div>
          </div>
          <div className="contact__form--items contact__form--padding">
            <label htmlFor="email">Email</label>
            <div className="contact__form--item">
              <input
                type="text"
                id="email"
                size="30"
                placeholder="name@humil.com"
                onChange={handleEmailChange}
              />
              <div className="error">{errors.email}</div>
            </div>
          </div>
          <div className="contact__form--items contact__form--padding">
            <label htmlFor="message">Message</label>
            <div className="contact__form--item message">
              <textarea
                id="message"
                placeholder="Say something..."
                rows="6"
                cols="30"
                onChange={handleMessageChange}
              ></textarea>
              <div className="error">{errors.message}</div>
            </div>
          </div>
          <div className="submit-button__container">
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
