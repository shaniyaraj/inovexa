import { useState } from 'react';
import './Contact.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    // alert('Form submitted successfully!');
    setFormData({
      name: '',
      contact: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="container">
        {/* Contact Form Section */}
      <div className="form-container">
        <div className="form-header">
         <h1 className="form-title">Let's talk</h1>
          <p className="form-subtitle">
            Fill out the form or write to us at:{' '}
            <a href="mailto:contact@cybermindworks.com" className="email-link">
              contact@cybermindworks.com
            </a>
          </p>
           {/* <h1 className="text-3xl font-bold mb-8 text-center text-black">Let's talk</h1>
      <p className="text-center mb-2">
        Fill out the form or write to us at:{' '}
        <a href="mailto:contact@cybermindworks.com">
          contact@cybermindworks.com
        </a>
      </p> */}
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact" className="form-label">
              Contact <span className="required">*</span>
            </label>
            <div className="phone-input-container">
              <div className="country-code">
                {/* <span className="phone-icon">📱</span> */}
                <span>+91</span>
              </div>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="phone-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company" className="form-label">
              Company <span className="required">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="form-textarea"
              required
            ></textarea>
          </div> */}

          <div className="submit-container">
            <button
              type="submit"
              onClick={handleSubmit}
              className="submit-button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

