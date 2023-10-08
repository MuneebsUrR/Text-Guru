
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(props) {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_89jmu7g', 'template_v5pw2m2', form.current, '3YnZSiukXbK4qePc1')
      .then(
        (result) => {
          e.target.reset();
          props.alert('success', 'Thanks for your message. We will get in touch with you shortly.');
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <div className="container contact-form">
        <h3 className="my-4" id="heading">
          Contact Us
        </h3>
        <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
            <label >Name</label>
            <input name='from_name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" required />
            <label htmlFor="email">Email address</label>
            <input name='user_email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <label>Message</label>
          <textarea name="message" className='form-control my-2' rows="8" required></textarea>
          
          <div>
            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
              Submit
            </button>
           
          </div>
        </form>
      </div>
    </>
  );
}
