import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'; 

export const Contact = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n6skd2z', 'template_4wugtbo', form.current, 'H7qQQxKp_H8j0mu9j')
      .then((result) => {
        console.log(result.text);
        setShowSuccessMessage(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        {showSuccessMessage ? (
          <div className="success-message">
            Message sent successfully!
          </div>
        ) : (
          <>
            <h3>"Drop me a line in the form, and let's connect"</h3>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOemH6FJoYV4zs1zGvmUydCp1OQk9Pncpjw&usqp=CAU' alt='nothing' className="center-image" />
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <label htmlFor="from_name">Name</label>
              <input type="text" name="from_name" id="from_name" />
              <label htmlFor="from_email">Email</label>
              <input type="email" name="from_email" id="from_email" />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" />
              <input type="submit" value="Send" />
            </form>
          </>
        )}
      </div>
    </div>
  );
};
