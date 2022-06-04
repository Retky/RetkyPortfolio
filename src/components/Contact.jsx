import React from 'react';
import './Contact.scss';

const Contact = () => (
  <section id="contact">
    <div className="contWidth contc">
      <h3>
        I&apos;m always interested in hearing about new projects,
        so if you&apos;d like to chat please get in touch.
      </h3>
      <form id="contactForm" action="https://formspree.io/f/mqknqqzb" method="post">
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="mail" placeholder="Email Address" required />
        <textarea name="message" placeholder="Enter Text Here" maxLength="500" required />
        <input id="contactBtn" type="submit" value="Get in touch" />
      </form>
    </div>
  </section>
);

export default Contact;
