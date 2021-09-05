import React from 'react';
import './contact.css';
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact';

const Contact = () => (
  <div className="contact">
    <Separator />
    <h1 className="section-title">Contact</h1>
    <div className="contact-container">
      <div className="contact-left">
        <p>
          Do you want to get in touch ?
          Click on one of the icons, I&apos;ll be happy to answer it
        </p>
        <SocialContact />
      </div>
    </div>
  </div>
);

export default Contact;
