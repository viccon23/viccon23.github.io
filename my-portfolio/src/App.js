import React from 'react';
import './styles/App.css';
import me from './images/me.jpg';
import AboutMe from './AboutMe.js';
import Experience from './JobEx.js';
import Projects from './Projects.js';
import Research from './Research.js';
import Contact from './Contact.js';
import NameTitle from './components/NameTitle';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ResumeDownload from './components/ResumeDownload';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <ScrollProgress />
        <Routes>
          <Route path="/" element={
          <>
            <div className="page-wrapper">
              <div className="content-wrapper">
                <NameTitle title="Victor Contreras" />
                <div className="main-page">
                  <div className="container">
                    <div className="content">
                      <Introduction />
                    </div>
                    <div className="image">
                      <img src={me} alt="myProfileImage" />
                    </div>
                  </div>
                </div>
                <ResumeDownload />
              </div>
              <Footer />
            </div>
          </>
          } />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

function Introduction() {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span>$ cat helloworld.txt</span>
      </div>
      <div className="terminal-content">
        <p>
          I'm a Computer Science graduate student at the University of Texas Rio Grande Valley.
        </p>
        <br></br>
        <p>
          This website began on April 29, 2023, and will be continually
          updated to feature personal projects, work experience, research and anything new that I add. 
        </p>
      </div>
    </div>
  );
}