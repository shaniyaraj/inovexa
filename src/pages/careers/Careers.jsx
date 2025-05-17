import { useState } from 'react';
import './Careers.css'

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    applying : '',
    resume: '',
    link:'',
    
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
      applying: '',
      resume: '',
      link:'',
     
    });
  };

  return (
    <div className="container">
        {/* Contact Form Section */}
      <div className="form-container">
        <div className="form-header">
         <h1 className="form-title">Work with us</h1>
          <p className="form-subtitle">
           Fill in the form and our team will get back to you
          </p>
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
            <label htmlFor="applying position" className="form-label">
              Applying Position<span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.applying}
              onChange={handleChange}
              placeholder="Front-End,Back-End,UI/UX,Testing etc"
              className="form-input"
              required
            />
          </div>
           
           <div className="form-group">
            <label htmlFor="resume" className="form-label">
              Resume URL<span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.resume}
              onChange={handleChange}
              placeholder="URL to your resume document"
              className="form-input"
              required
            />
          </div>

             <div className="form-group">
            <label htmlFor="link" className="form-label">
              Link to LinkedIn<span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.link}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

         

          <div className="submit-container">
            <button
              type="submit"
              onClick={handleSubmit}
              className="submit-button"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

