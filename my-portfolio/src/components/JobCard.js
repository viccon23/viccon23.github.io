import React from 'react';
import '../styles/JobEx.css';

function JobCard({ title, logo, company, duration, description }) {
    return (
      <div className="job-experience-container">
        <div className="job-header">
          {logo && <img src={logo} alt={company} className="company-logo" />}
          <div className="job-title">{title}</div>
          <div className="company-name">{company}</div>
          <div className="duration">{duration}</div>
        </div>
        <ul className="job-description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default JobCard;