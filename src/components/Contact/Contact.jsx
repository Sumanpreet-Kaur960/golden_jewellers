import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>
      <p className="contact-text">
        We'd love to hear from you. Feel free to contact us.
      </p>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Enter your name"
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <textarea
          rows="6"
          placeholder="Write your message..."
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;