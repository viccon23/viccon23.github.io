import React, { useEffect } from 'react';
import './styles/Projects.css';
import NameTitle from './components/NameTitle';
import Footer from './components/Footer';
import CLIPassword from './images/CLIPassword.png';
import ToDoList from './images/ToDoList.png';
import HighPerformanceVoxelEngine from './images/HighPerformanceVoxelEngine.png';
import Deepening from './images/Deepening.jpg';
import wordie2Image from './images/Wordie2.png';
import GPT2 from './images/GPT2.jpg';
import cpp1 from './images/cpp1.png';

function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 600 * index); // Stagger the animations
    });
  }, []);

  const projects = [
    // {
    //   title: 'ZeroToHire',
    //   description: "ZeroToHire is an intelligent full-stack coding tutor that transforms LeetCode preparation through AI-guided learning. The application combines a React.js frontend with a Flask backend, utilizing a locally-hosted 13B-parameter language model that has been carefully prompt-engineered to teach through guided discovery rather than direct instruction. Users interact with an integrated Monaco code editor while receiving personalized hints, step-by-step guidance, and real-time feedback from an AI tutor that adapts its teaching style to each individual's learning pace. The platform runs entirely offline with GPU acceleration, ensuring fast response times and complete privacy while helping developers build genuine problem-solving skills for technical interviews. \n\n (Still being developed!)",
    //   imagePath: null,
    //   githubUrl: null,
    // },
    {
      title: 'CLI Password Manager',
      description: 'A command line interface password manager built with Python. It allows users to securely store and manage their passwords. The project emphasizes security best practices and user-friendly CLI interactions, and it was a great way for me to learning about encryption and secure password storage, such as hashing and the concept of salting passwords.',
      imagePath: CLIPassword,
      githubUrl: 'https://github.com/viccon23/CLI-Password-Manager'
    },
    {
      title: 'ToDo List App',
      description: 'My first full stack project, this is a task management application built with the MERN stack and also with Electron for desktop app deployment. Allows for cross-device synchronization through MongoDB Atlas cloud database. Basic CRUD operations for task management and a task categorization system for filtering tasks by type.',
      imagePath: ToDoList,
      githubUrl: 'https://github.com/viccon23/todo-list'
    },
    {
      title: 'High Performance Voxel Game Engine',
      description: "Collaborated on creating a voxel game engine using C++ and the BGFX rendering library. Focused on optimization techniques and rendering algorithms for high performance chunk generation and frame rates.",
      imagePath: HighPerformanceVoxelEngine,
      githubUrl: 'https://github.com/athaun/voxel-engine'
    },
    {
      title: 'The Deepening',
      description: 'A 2D platformer game developed in Unity. The game features a deep sea diver operating a submarine who must navigate through the ocean depths while avoiding obstacles and enemies while collecting scrap to upgrade their submarine and find a lost ship containing a lost family heirloom.',
      imagePath: Deepening,

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
                  {project.githubUrl && (
                    <div className="github-link">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                      </a>
                    </div>
                  )}
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