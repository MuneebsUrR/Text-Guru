
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact(props) {
  const form = useRef();
  // const submitButton = document.getElementById('submitButton');
  // const submitButtonLoader = document.getElementById('submitButtonLoader');
  const sendEmail = (e) => {
    e.preventDefault();
    // submitButton.classList.add('d-none');
    // submitButtonLoader.classList.remove('d-none');

    emailjs.sendForm('service_89jmu7g', 'template_v5pw2m2', form.current, '3YnZSiukXbK4qePc1')
      .then((result) => {
        console.log(result.text);
        console.log('message sent')
        e.target.reset();
        // submitButton.classList.remove('d-none');
        // submitButtonLoader.classList.add('d-none');
      }, (error) => {
        console.log(error.text);
      });
     
  };
  return (
    <>
      <div className="container  contact-form">

        <h3 className='my-4' id='heading'>Contact Us</h3>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label >Name</label>
            <input name='from_name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" />
            <label htmlFor="email">Email address</label>
            <input name='user_email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <label>Message</label>
          <textarea name="message" className='form-control my-2' rows="8"></textarea>
          <div>
            <button className="btn btn-primary " id='submitButton'>Submit</button>
            {/* <button id="submitButtonLoader" className="btn btn-primary d-none"  type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              Loading...
            </button> */}
          </div>

        </form>

      </div>
    </>
  )
}
