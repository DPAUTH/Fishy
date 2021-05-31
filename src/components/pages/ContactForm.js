import React, { useState } from "react";
import "./ContactForm.css"
import Footer from '../Footer';

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <>

    <div className='container'>
        <h1>Contact Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" required cols="30" rows="10" placeholder="Enter your message here ..." />
            </div>
            <button type="submit">{status}</button>
          </form>
    </div>
    
    
    
    <Footer />
    </>
  );
};

export default ContactForm;