import React from "react";
import ContactForm from "../components/ContactForm";
import ContactUsPic from "../assets/ContactUs.png"; 


function ContactUS(){
    return(
      <> 
        <div className="containerForContactUs">
      <img 
        src={ContactUsPic} 
        alt="Contact us illustration" 
        className="ContactUsPic" 
      />
      <div className="contactUsPage">
        <h2 className="H">
          <b>Contact Us</b>
        </h2>
        <p className="H">
          <b>
            Feel free to reach out to us at support@bookhub.com. or here... <br />
            "We’d love to hear from you!"
          </b>
        </p>
        <ContactForm />
      </div>
    </div>
      </>
    );
}

export default ContactUS