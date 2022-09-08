import React from 'react';
import './Contact.scss';

const Contact = () => (
  <section id="contact">
    <div className="contWidth contc">
      <div className="tittle">
        <h3>
          I&apos;m always interested in hearing about new projects,
          so if you&apos;d like to chat please get in touch.
        </h3>
      </div>
      <form id="contactForm" action="https://formspree.io/f/mqknqqzb" method="post">
        <input className="formFile" type="text" name="name" placeholder="Full Name" required />
        <input className="formFile" type="email" name="mail" placeholder="Email Address" required />
        <textarea name="message" placeholder="Enter Text Here" maxLength="500" required />
        <input id="contactBtn" className="orangeBtn" type="submit" value="Get in touch" />
      </form>
    </div>
  </section>
);

export default Contact;
