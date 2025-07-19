import React from 'react';
import '../styles/JobEx.css';

function JobCard({ title, logo, company, companyUrl, duration, description }) {
    return (
      <div className="job-experience-container">
        <div className="job-header">
          {logo && companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer">
              <img src={logo} alt={company} className="company-logo" />
            </a>
          ) : (
            logo && <img src={logo} alt={company} className="company-logo" />
          )}
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