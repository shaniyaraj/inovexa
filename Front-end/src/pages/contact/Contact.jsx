import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Contact.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    company: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  //   setErrors(prev => ({ ...prev, [name]: '' }));
  // };
  const handleChange = (e) => {
  const { name, value } = e.target;

  // ✅ Highlighted: Only allow digits and max 10 characters for contact
  if (name === 'contact') {
    const cleanedValue = value.replace(/\D/g, '').slice(0, 10); // Only digits, max 10
    setFormData(prev => ({ ...prev, [name]: cleanedValue }));
  } else if (name === 'email') {
    // ✅ Allow only email-valid characters
    const cleanedEmail = value.replace(/[^a-zA-Z0-9@._-]/g, '');
    setFormData(prev => ({ ...prev, [name]: cleanedEmail }));
  } else {
    setFormData(prev => ({ ...prev, [name]: value }));
  }
  setErrors(prev => ({ ...prev, [name]: '' }));
};

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    // if (!/^\d{10}$/.test(formData.contact)) newErrors.contact = 'Enter a valid 10-digit number.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email.';
    if (!formData.company.trim()) newErrors.company = 'Company name is required.';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/form', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Form submitted:', response.data);
      console.log('Sending data:', formData);


      // Reset form
      setFormData({
        name: '',
        contact: '',
        email: '',
        company: '',
      });
      setErrors({});

      // Redirect
      navigate("/thank-you");
    } catch (error) {
      if (error.response) {
        console.error('Server error:', error.response.data.error || error.response.data);
        alert(error.response.data.error || 'Something went wrong!');
      } else {
        console.error('Network error:', error);
        alert('Failed to submit form. Please try again later.');
      }
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-header">
          <h1 className="form-title">Let's talk</h1>
          <p className="form-subtitle">
            Fill out the form or write to us at:{' '}
            <a href="mailto:contact@inovexa.com" className="email-link">
              contact@Inovexa.com
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
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
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Contact */}
          <div className="form-group">
            <label htmlFor="contact" className="form-label">
              Contact <span className="required">*</span>
            </label>
            <div className="phone-input-container">
              <div className="country-code"><span>+91</span></div>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="phone-input"
                maxLength={"10"}
                inputMode="numeric"
              />
            </div>
            {errors.contact && <span className="error">{errors.contact}</span>}
          </div>

          {/* Email */}
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
              inputMode="email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Company */}
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
            />
            {errors.company && <span className="error">{errors.company}</span>}
          </div>

          {/* Message */}
          {/* <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-input"
              rows={4}
            />
          </div> */}

          <div className="submit-container">
            <button type="submit" className="submit-button">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}