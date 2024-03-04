import React from 'react';

function ContactPage() {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;