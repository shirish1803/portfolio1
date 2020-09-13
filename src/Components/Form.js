import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { db }  from './firebase';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('contact').add({
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      alert('message has been submitted');
      setLoader(false);
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><h6>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6> </label>
      <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} /><br/>
      <label><h6>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6> </label>
      <input type="email"  className="input" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
      <label><h6>Message:&nbsp;</h6> &nbsp;</label>
      <textarea  className="input" value={message} onChange={(e) => setMessage(e.target.value)} /><br/>
      <button type="submit" className="button" style={{background: loader ? "#ccc" : " rgb(2, 2, 110)"}}>Send</button>
    </form>
  );
}
  

export default Contact;