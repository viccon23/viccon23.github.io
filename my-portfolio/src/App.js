import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import JobExperience from './JobEx';
import './styles/App.css';
import me from './images/me.jpg';
import inl from './images/inl.png';
import wordie2Image from './images/Wordie2.png';
import cpp1 from './images/cpp1.png';
import GPT2 from './images/GPT2.jpg';
import HighPerformanceVoxelEngine from './images/HighPerformanceVoxelEngine.png';

function App() {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(0);
  const experiences = [
    {
      title: 'Database Developer Intern',
      logo: inl,
      company: 'Idaho National Lab',
      duration: 'May 2024 - August 2024',
      description: [
        ' Developed a SQL database using Python, implementing methods for continual data integration and resolving errors in testing and quality assurance. Heavy use of Linux environment.',
        " Designed a script that would transfer necessary files from the INL Sawtooth HPC into an organized directory, while simultaneously being written to database information about it's new file location as well as other data",
        ' Reduced storage necessity on HPC by over 90%',
        " Allow for Computation Methods and Mechanics team to access output files ran from daily simulation tests spanning over 5 years in an organized fashion, acting like a historical archive, in essence."
      ],
    }
  ];

  useEffect(() => {
    const fetchedProjects = [
      {
        title: 'High Performance Voxel Game Engine',
        description: "Collaborated on creating a voxel game engine using C++ and BGFX. Focused on optimization techniques and rendering algorithms for high performance chunk generation and frame rates. Includes lighting, shadows and physics engine.",
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
    setProjects(fetchedProjects);

    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });

      // Infinite scroll logic
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setVisibleProjects((prevVisibleProjects) => Math.min(prevVisibleProjects + 2, fetchedProjects.length));
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const threshold = 100; // Pixels above viewport to trigger
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) + threshold &&
      rect.bottom >= 0 &&
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <>
      <NameTitle />
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

      <div className="container continuation reveal-on-scroll">
        <p>Work Experience</p>
      </div>
      <div className="main-page container continuation reveal-on-scroll">
        {experiences.map((exp, index) => (
          <div className="job-experience-container" key={index}>
            <div>
              <JobExperience
                title={exp.title}
                logo={inl}
                company={exp.company}
                duration={exp.duration}
                description={exp.description}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="container continuation reveal-on-scroll">
        <p> Below are some Projects I am either working on or have currently done both independently and in a team:</p>
      </div>

      <div className="main-page container projectCards">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div className="projects-list reveal-on-scroll" key={index}>
            <Project
              title={<h1>{project.title}</h1>}
              description={project.description}
              imagePath={project.imagePath}
              githubUrl={project.githubUrl}
            />
          </div>
        ))}
      </div>

      <div className="continuation reveal-on-scroll"></div>

      <footer>
        <div className="footer-content">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/viccon23" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            <a href="mailto:victor.contreras23@aol.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a>
            <a href="https://github.com/viccon23" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

function Introduction() {
  return (
    <>
      <p>
        Hello, my name is Victor and I'm a Computer Science student at UTRGV. This website began on April 29, 2023, and will be continually updated to feature personal projects and anything new that is well.... worth including in a personal website.
        I am currently interested in fields such as Networking, Web Development, Software Engineering and Machine Learning.
      </p>

      <p>
        I started my journey in August of 2022 at the University of Texas Rio Grande Valley, persuing a Bachelors of Science in Computer Science. In December of 2024, I graduated and am now persuing a Masters Degree in Computer Science. 
        I have been involved in various projects, both independently and in a team, and in these short two years of solely taking core Computer Science/ Math courses, I have grown and learned so much, and to say my life has changed (positively) is an understatement.
        I am always looking for new opportunities to learn and grow as a developer, and I am very excited to see where my journey will take me as I tackle on more challenges both in school and in the workforce.
      </p>

      <p>
        This website is still in construction, and as time passes, more features will be added.
      </p>
    </>
  );
}

function NameTitle() {
  return (
    <div className='FrontPageTitle'>
      <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {' '}
        <span style={{ fontWeight: 'bold' }}>
          <Typewriter
            words={['Victor Contreras']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </span>
      </h1>
    </div>
  );
}

function Project({ title, description, imagePath, githubUrl }) {
  return (
    <div className="project-container">
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="project-image">
        <img src={imagePath} alt={title} />
      </div>
      {githubUrl && (
        <div className="github-link-container">
          <GitHubLink url={githubUrl} />
        </div>
      )}
    </div>
  );
}

function GitHubLink({ url }) {
  return (
    <div className="github-link">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github"></i>
      </a>
    </div>
  );
}