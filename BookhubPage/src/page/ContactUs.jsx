import React from "react";
import ContactForm from "../components/ContactForm";


function ContactUS(){
    return(
      <>
        <div className="contactUsPage bodyPage"> 
          <h2 className="H"><b>Contact Us</b></h2>
          <p><b>Feel free to reach out to us at support@bookhub.com. or here...... <br />
          "We’d love to hear from you!"</b></p>
          <ContactForm />
        </div>
      </>
    );
}

export default ContactUS