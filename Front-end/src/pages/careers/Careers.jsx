import { useState } from 'react';
import './Careers.css';
import { useNavigate } from 'react-router-dom';

export default function Careers() {
  const navigate = useNavigate(); // For navigation to thank-you page

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    applying: '',
    resume: '',
    link: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!/^\d{10}$/.test(formData.contact)) newErrors.contact = 'Valid 10-digit contact number required.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.applying.trim()) newErrors.applying = 'Position is required.';
    if (!/^https?:\/\/.+\..+/.test(formData.resume)) newErrors.resume = 'Valid resume URL is required.';
    if (!/^https?:\/\/(www\.)?linkedin\.com\/.+/.test(formData.link)) newErrors.link = 'Valid LinkedIn URL is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // Clear field error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form submitted:', formData);

    // Reset form
    setFormData({
      name: '',
      contact: '',
      email: '',
      applying: '',
      resume: '',
      link: '',
    });
    setErrors({});

    // Navigate to thank-you page
    navigate('/apply');
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-header">
          <h1 className="form-title">Work with us</h1>
          <p className="form-subtitle">Fill in the form and our team will get back to you</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name <span className="required">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Contact */}
          <div className="form-group">
            <label htmlFor="contact" className="form-label">Contact <span className="required">*</span></label>
            <div className="phone-input-container">
              <div className="country-code"><span>+91</span></div>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="phone-input"
              />
            </div>
            {errors.contact && <span className="error">{errors.contact}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email address <span className="required">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Applying Position */}
          <div className="form-group">
            <label htmlFor="applying" className="form-label">Applying Position <span className="required">*</span></label>
            <input
              type="text"
              name="applying"
              value={formData.applying}
              onChange={handleChange}
              placeholder="Front-End, Back-End, UI/UX, Testing etc"
              className="form-input"
            />
            {errors.applying && <span className="error">{errors.applying}</span>}
          </div>

          {/* Resume URL */}
          <div className="form-group">
            <label htmlFor="resume" className="form-label">Resume URL <span className="required">*</span></label>
            <input
              type="text"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              placeholder="URL to your resume document"
              className="form-input"
            />
            {errors.resume && <span className="error">{errors.resume}</span>}
          </div>

          {/* LinkedIn URL */}
          <div className="form-group">
            <label htmlFor="link" className="form-label">LinkedIn Profile <span className="required">*</span></label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="form-input"
              placeholder="https://linkedin.com/in/username"
            />
            {errors.link && <span className="error">{errors.link}</span>}
          </div>

          <div className="submit-container">
            <button type="submit" className="submit-button">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
}
