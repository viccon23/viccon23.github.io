import React from 'react';
import '../styles/ResumeDownload.css';

function ResumeDownload() {
  const handleDownload = (format) => {
    const link = document.createElement('a');
    link.href = `/resume.${format}`;
    link.download = `Victor_Contreras_Resume.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-download-container">
      <div className="terminal-resume">
        <div className="resume-header">
          <span>$ ./download_resume.sh</span>
        </div>
        <div className="resume-content">
          <p className="resume-intro">
          </p>
          <div className="download-buttons">
            <button 
              className="download-btn pdf-btn" 
              onClick={() => handleDownload('pdf')}
            >
              <i className="fa fa-file-pdf-o"></i>
              <span>DOWNLOAD PDF</span>
              <div className="btn-glow"></div>
            </button>
            {/* <button 
              className="download-btn json-btn" 
              onClick={() => handleDownload('json')}
            >
              <i className="fa fa-code"></i>
              <span>DOWNLOAD JSON</span>
              <div className="btn-glow"></div>
            </button> */}
          </div>
          <div className="resume-stats">
            <p>{'>'} File Size: 156KB</p>
            <p>{'>'} Last Updated: November 2026</p>
            <p>{'>'} Format: Professional Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeDownload;
