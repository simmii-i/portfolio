import React, { useRef } from "react";
 import emailjs from '@emailjs/browser';
import SendIcon from "@mui/icons-material/Send";
import "./Contact.css";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Send } from "@mui/icons-material";

const Contact = () => {
  const form  = useRef();
const sendEmail = (e)=>{
        e.preventDefault();

        if(form.current) {
          emailjs.sendForm('service_4gl94kq','template_u8523u4',form.current, 'SjyQyJtOmG5wqRVLw').then(
            (result)=> {
              console.log('SUCCESS!', result.text);
            },
            (error)=> {
              console.log('FAILED...', error.text);
            }
          ); 
          form.current.reset();
        }
        else {
          console.error('Form reference is null');
        }
}

  return (
    <>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28130.179840818637!2d76.59937562394134!3d28.199032957837062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d50719ae37551%3A0xe4c45afc4faedcee!2sRewari%2C%20Haryana%20123401!5e0!3m2!1sen!2sin!4v1718170955912!5m2!1sen!2sin" 
      title="map"
      width="100%"
        className="map"
        style={{border:0}}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"

      ></iframe>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="name-email">
            <div className="name-con">
                <label > Name  <span style={{ color: "red" }}>*</span></label>
                <input type="text" name="Name" required={true} />

            </div>
            <div className="email-con">
                <label > Email  <span style={{ color: "red" }}>*</span></label>
                <input type="email" name="Email" required={true} />

            </div>
            
          </div>
          
          <label>Message</label>
          <textarea name="message" />
          
          <div className="button">
            <button value={"Send"}> <SendIcon style={{marginRight:5}}/> Send </button>
          </div>
      </form>
    </>
  );
};

export default Contact;
