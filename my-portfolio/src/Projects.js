import React, { useEffect } from 'react';
import './styles/Projects.css';
import NameTitle from './components/NameTitle';
import Footer from './components/Footer';
import HighPerformanceVoxelEngine from './images/HighPerformanceVoxelEngine.png';
import wordie2Image from './images/Wordie2.png';
import GPT2 from './images/GPT2.jpg';
import cpp1 from './images/cpp1.png';

function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 200 * index); // Stagger the animations
    });
  }, []);

  const projects = [
    {
      title: 'High Performance Voxel Game Engine',
      description: "Collaborated on creating a voxel game engine using C++ and the BGFX rendering library. Focused on optimization techniques and rendering algorithms for high performance chunk generation and frame rates. Currently in the process of finetuning lighting and adding shadows.",
      imagePath: HighPerformanceVoxelEngine,
      githubUrl: 'https://github.com/athaun/voxel-engine'
    },
    {
      title: 'Python Wordle Clone',
      description: 'A Python project that clones the Wordle game.',
      imagePath: wordie2Image,
      githubUrl: 'https://github.com/viccon23/WordleGamepy'
    },
    {
      title: 'ChatGPT Discord Bot',
      description: "Utilizing OpenAI's API, this custom made Discord bot will answer prompts from users who send messages through a text channel.",
      imagePath: GPT2,
      githubUrl: 'https://github.com/viccon23/GPTBot'
    },
    {
      title: 'Music Playlist Management System',
      description: 'Create a Playlist, add or remove tracks, move tracks around playlist, toggle as favorite, and more in this C++ Music Management System using vectors and linked lists.',
      imagePath: cpp1,
      githubUrl: 'https://github.com/viccon23/Music-Playlist'
    }
  ];

  return (
    <>
     <div className="page-wrapper">
        <div className="content-wrapper">
          <NameTitle title="Projects"/>
          <div className="projects-container">
            <div className="project-content-container">
              {projects.map((project, index) => (
                <div className="project-card fade-in" key={index}>
                  <div className="project-info">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-image">
                    <img src={project.imagePath} alt={project.title} />
                  </div>
                  <div className="github-link">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github"></i>
                    </a>
                  </div>
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

export default Projects;