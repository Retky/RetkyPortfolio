import '../styles/Contact.scss';

const Contact = () => {
  const view = (
    <div id="contact" className="contact">
      <div className="contact-content">
        <h2 className="contact-title">Reach Out and Let&apos;s Create Something Amazing!</h2>
        <form id="contact-form" className="contact-form" action="https://formspree.io/f/mqknqqzb" method="post">
          <input className="form-file" type="text" name="name" placeholder="Full Name" required />
          <input className="form-file" type="email" name="mail" placeholder="Email Address" required />
          <textarea className="form-msg" name="message" placeholder="Enter Text Here" maxLength="1200" required />
          <input id="contact-btn" className="orange-btn" type="submit" value="Get in touch" />
        </form>
      </div>
    </div>
  );

  return view;
};

export default Contact;
