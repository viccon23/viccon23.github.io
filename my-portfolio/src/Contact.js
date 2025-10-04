import React, { useState } from 'react';
import './styles/Contact.css';
import NameTitle from './components/NameTitle';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser'

// Use environment variables if available, otherwise use hardcoded values for production
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_abgb0lb';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_ecgmsnl';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'x_-y9JNgevuybtf2g';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'ERROR: Name field is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'ERROR: Email field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'ERROR: Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'ERROR: Subject field is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'ERROR: Message field is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'ERROR: Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    setFormStatus({
      submitted: false,
      error: true,
      message: 'VALIDATION_ERROR: Please fix the errors above'
    });
    return;
  }

  // Show loading state
  setFormStatus({
    submitted: false,
    error: false,
    message: 'SENDING...'
  });

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    setFormStatus({
      submitted: true,
      error: false,
      message: 'SUCCESS: Message sent successfully! I\'ll get back to you soon.'
    });

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);

  } catch (error) {
    console.error('EmailJS Error:', error);
    setFormStatus({
      submitted: false,
      error: true,
      message: 'ERROR: Failed to send message. Please try again or use alternative contact methods.'
    });
  }
};

  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <NameTitle title="Contact" />
        <div className="contact-container">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-title">$ contact_form.sh</span>
            </div>
            <div className="terminal-body">
              <p className="terminal-intro">
                {'>'} INITIALIZING CONTACT PROTOCOL...<br/>
                {'>'} Ready to receive transmission. Please fill in all required fields.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    {'>'} NAME:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Enter your name..."
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    {'>'} EMAIL:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    {'>'} SUBJECT:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    {'>'} MESSAGE:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Type your message here..."
                    rows="6"
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                {formStatus.message && (
                  <div className={`status-message ${formStatus.error ? 'error' : 'success'}`}>
                    {formStatus.message}
                  </div>
                )}

                <button type="submit" className="submit-button">
                  {'>'} SEND_MESSAGE
                </button>
              </form>

              <div className="alternative-contact">
                <p>{'>'} ALTERNATIVE CONTACT METHODS:</p>
                <div className="contact-links">
                  <a href="mailto:victor.contreras23@aol.com">
                    <i className="fa fa-envelope"></i> victor.contreras23@aol.com
                  </a>
                  <a href="https://www.linkedin.com/in/viccon23" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i> LinkedIn
                  </a>
                  <a href="https://github.com/viccon23" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
