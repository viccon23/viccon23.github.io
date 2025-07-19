import React, { useEffect } from 'react';
import './styles/JobEx.css';
import JobCard from './components/JobCard.js';
import Footer from './components/Footer';
import inl from './images/inl.png';
import NameTitle from './components/NameTitle';

function Experience() {
  useEffect(() => {
    const cards = document.querySelectorAll('.job-experience-container');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 200 * index);
    });
  }, []);
  const experiences = [
    {
      title: 'Database Developer Intern',
      logo: inl,
      company: 'Idaho National Lab',
      companyUrl: 'https://inl.gov/',
      duration: 'May 2024 - August 2024',
      description: [
        " Developed a SQL database using Python to automate data integration and resolve errors during testing and quality assurance in a Linux environment.",
        " Created a script to transfer and organize files from the INL Sawtooth HPC, while recording metadata (file location, assessment, file type, etc.) in the database for future access using Pandas and CSV modules",
        " Reduced storage requirements for output files on HPC by over 90%, saving over 200TB of storage space.",
        " Enabled the team to efficiently access historical simulation test output files spanning over five years, improving the team's ability to analyze and compare data."
      ],
    }
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content-wrapper">
          <NameTitle title="Experience"/>
          <div className="experience-container">
            <div className="job-content-container">
              {experiences.map((exp, index) => (
                <div className="job-experience-container" key={index}>
                  <JobCard
                    title={exp.title}
                    logo={exp.logo}
                    company={exp.company}
                    companyUrl={exp.companyUrl}
                    duration={exp.duration}
                    description={exp.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Experience;