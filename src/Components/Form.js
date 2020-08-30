import React from 'react';
import emailjs from 'emailjs-com';



export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_Aia6MBZY', e.target, 'user_CUsRmO3ru8A6nNh6986Hy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label><h6>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6> </label>
      <input type="text" name="from_name" className="input" /><br/>
      <label><h6>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6> </label>
      <input type="email" name="user_email" className="input"/><br/>
      <label><h6>Message:&nbsp;</h6> &nbsp;</label>
      <textarea name="message_html" className="input"/><br/>
      <input type="submit" value="Send" className="button" style={{backgroundColor: "green"}}/>
    </form>
  );
}