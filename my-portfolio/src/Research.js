import React from 'react';
import './styles/Research.css';
import NameTitle from './components/NameTitle';
import Footer from './components/Footer';

function Research() {
  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <NameTitle title="Research" />
        <article className="research-container">
          <div className="research-item-title">
            <h2>Evaluating Machine Learning Models and Learned Representations for Travel Choice and Attitude Prediction</h2>
            <p className="research-item-meta">M.S. thesis · UTRGV · 2026</p>
          </div>
          <div className="research-item">
            <p>
              My thesis looked at what machine learning can learn from small transportation surveys.
              The three studies ask whose answers are available for training, what can be measured
              when making a prediction, and how the model uses those inputs.
            </p>
            <ul className="research-study-list">
              <li>
                <strong>Autonomous vehicle attitudes and geographic transfer.</strong> I tested
                whether models trained in one city could predict safety confidence and willingness
                to ride in another. Prediction weakened across cities, and adding local survey
                responses helped in several comparisons. I used Census data to produce model-based
                projections across four states.
              </li>
              <li>
                <strong>Bayesian networks for related survey responses.</strong> I compared ways of
                estimating probabilities in a fixed Bayesian network and tested whether measured
                or predicted safety confidence helps predict willingness to ride. Measured
                confidence helped more consistently.
              </li>
              <li>
                <strong>Air taxi choice and learned representations.</strong> I tested ways to
                combine embeddings with multinomial logit for Chicago airport trips involving a
                hypothetical air taxi. A regularized logit that used the original survey variables
                directly remained competitive with the embedding models.
              </li>
            </ul>
          </div>
        </article>
        <article className="research-container">
          <div className="research-item-title">
            <h2>Autonomous Vehicle Dilemma Simulations in CARLA</h2>
          </div>
          <div className="research-item">
            <p>
              I built driving scenarios in CARLA for a study of how people respond to autonomous
              vehicle crash dilemmas. The simulations let the research team present the same
              events to participants and record their responses using electroencephalography (EEG).
            </p>
          </div>
        </article>
        <article className="research-container">
          <div className="research-item-title">
            <h2>Deep Learning Models for Medical Image Segmentation</h2>
          </div>
          <div className="research-item">
            <p>For my Deep Learning class, I collaborated with a team in training 4 Deep Learning models, each utilizing a different architecture and having a U-Net Backbone.
              These models were trained on the ISIC 2018 dataset, which contains dermoscopic images of skin lesions, and PolyPGen, a dataset of polyps in colonoscopy images 
              (Retrieved from MedSegBench). The goal of this project was to segment the images across all 4 models, and compare performance across the models using metrics 
              such as Dice Coefficient, MIOU, and Recall. The models were trained both locally and on my school's HPC cluster.
            </p>
            <p>
              This was my first experience with Deep Learning research and working with medical image segmentation, and I learned a lot about the process of training models, especially with preprocessing the data to have
              the model train on it. I also learned about the importance of hyperparameter tuning and how it can affect the performance of the model.
            </p>
            <p><a href={`${process.env.PUBLIC_URL}/ResearchPoster.pdf`}>View the research poster (PDF)</a></p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default Research;
