import React from 'react';
import './styles/Research.css';
import NameTitle from './components/NameTitle';
import Footer from './components/Footer';

function Research() {
  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <NameTitle title="Research" />
        <div className="research-container">
          <div className="research-content">
            <p className="construction-text">In construction.</p>
            <p className="focus-text">Current Potential Focus: Black Holes</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Research;