
function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-form">
        <form action="" method="post">
          <div className="contact-input">
            <input type="text" id="firstname" name="firstname" placeholder="First Name" required></input>
            <input type="text" id="lastname" name="lastname" placeholder="Last Name" required></input>
            <input type="text" id="email" name="email" placeholder="Email" required></input>
          </div>
          <div className="contact-input">
            <input type="text" id="subject" name="subject" placeholder="Subject"required></input>
            <input type="text" id="message" name="message" placeholder="Your Message"required></input>
          </div>
        </form>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Contact;