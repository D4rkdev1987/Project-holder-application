import React from 'react'
import contactPagePicture from "../../../static/assets/images/auth/another-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function() {
  return (
      <div className="content-page-wrapper">
        <div className="left-column" 
          style={{
            background: "url(" + contactPagePicture + ") no-repeat",  
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="right-column-contact">
          <h1>This is My Contact Information</h1>
          <div className="facebook-right-column">  
            <h3>Check out my Stream Channel</h3>
            <a href="https://www.facebook.com/d4rkdevGaming/" >D4rkDev Gaming Facebook Link....<FontAwesomeIcon icon="fighter-jet"/></a>
            <h3>This is my Personal Profile</h3>
            <a href="https://www.facebook.com/benjaminj.nicklaus.7" >Facebook Link....<FontAwesomeIcon icon="comment-dots"/></a>
          </div>
          
          <div className="bottega-column-right">  
            <h3>Sign Up For Bottega with the Below Link</h3>
            <a href="https://www.bottega.tech" >Bottega Code School...<FontAwesomeIcon icon="laptop-code"/></a>
          </div>

          <div className="contact-information-column-right">  
            <p>Phone: 239-250-8624...<FontAwesomeIcon icon="mobile-alt"/></p>
            <p>address: Naples, Florida...<FontAwesomeIcon icon="address-card"/></p>
          </div>
        </div> 
      </div>
  )
}