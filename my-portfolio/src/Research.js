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
          <div className="research-item-title">
            <h2>Deep Learning Models for Medical Image Segmentation</h2>
          </div>
          <div className="research-item">
            <div className="pdf-viewer-container">
              <iframe 
                src="/ResearchPoster.pdf"
                width="100%" // Make the iframe fill its container
                height="750px" // Adjust this height as needed to make the PDF larger
                title="Research Poster: Deep Learning Models for Medical Image Segmentation"
                style={{ border: 'none' }} // Optional: removes default iframe border
              >
                <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="/my_research_paper.pdf">Download PDF</a>.</p>
              </iframe>
            </div>
            <p>For my Deep Learning class, I collaborated with a team in training 4 Deep Learning models, each utilizing a different architecture and having a U-Net Backbone.
              These models were trained on the ISIC 2018 dataset, which contains dermoscopic images of skin lesions, and PolyPGen, a dataset of polyps in colonoscopy images 
              (Retrieved from MedSegBench). The goal of this project was to segment the images across all 4 models, and compare performance across the models using metrics 
              such as Dice Coefficient, MIOU, and Recall. The models were trained both locally and on my school's HPC cluster.
            </p>
            <p>
              This was my first experience with Deep Learning research and working with medical image segmentation, and I learned a lot about the process of training models, especially with preprocessing the data to have
              the model train on it. I also learned about the importance of hyperparameter tuning and how it can affect the performance of the model.
            </p>
          </div>
        </div>
        <div className="research-container">
          <div className="research-item-title">
            <h2>Under Construction</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Research;