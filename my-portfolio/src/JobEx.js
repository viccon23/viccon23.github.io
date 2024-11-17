import React from 'react';
import './styles/JobEx.css';

function JobExperience({ title, logo, company, duration, description }) {
    return (
      <div className="job-experience-container">
        <div className="job-header">
          <h3 className="job-title">{title}</h3>
            <img src={logo} alt="companyLogo" />
          <h4 className="company-name">{company}</h4>
          <span className="duration">{duration}</span>
        </div>
        <div className="job-description">
          <ul>
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

export default JobExperience;