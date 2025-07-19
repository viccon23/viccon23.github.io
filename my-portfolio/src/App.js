import React from 'react';
import './styles/App.css';
import me from './images/me.jpg';
import AboutMe from './AboutMe.js';
import Experience from './JobEx.js';
import Projects from './Projects.js';
import Research from './Research.js';
import NameTitle from './components/NameTitle';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
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
              </div>
              <Footer />
            </div>
          </>
          } />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

function Introduction() {
  return (
    <>
      <p>
        Hello! My name is Victor Contreras and I'm a Computer Science graduate student at the University of Texas Rio Grande Valley. This website began on April 29, 2023, and will be continually updated to feature personal projects, work experience, areas of research and anything new that I add.
        I'm a passionate student with a keen interest in software engineering and artificial intelligence. I have experience in web development, game development, and data mining, and I'm always eager to learn more as technology evolves.
      </p>
    </>
  );
}