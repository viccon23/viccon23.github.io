import React from 'react';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import JobExperience from './JobEx';
import './styles/App.css';
import me from './images/me.jpg'; import wordie2Image from './images/Wordie2.png';
import cpp1 from './images/cpp1.png';
import GPT2 from './images/GPT2.jpg';
import HighPerformanceVoxelEngine from './images/HighPerformanceVoxelEngine.png';
import inl from './images/inl.png';



function App() {
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
    }];

  useEffect(() => {

    // Add a scroll event listener
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');

      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
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

      {/* Job Experience Section */}
      <div className="container continuation reveal-on-scroll" style={{alignContent: 'center'}}>
        <p>Work Experience</p>
      </div>
      <div className="main-page container continuation reveal-on-scroll" style={{alignContent: 'center'}}>
        {experiences.map((exp, index) => (
          <div className="job-experience-container" key={index}>
            <div style={{ flex: 1 }}>
              <JobExperience
                title={exp.title}
                logo = {inl}
                company={exp.company}
                duration={exp.duration}
                description={exp.description}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="container continuation reveal-on-scroll" style={{alignItems : 'Center'}}>
        <p> Below are some Projects I am either working on or have currently done both independently and in a team:</p>
      </div>

      <div className=" main-page container projectCards">
          <div className="projects-list reveal-on-scroll">
            <Project
              title={<h1>High Performance Voxel Game Engine</h1>}
              description="Collaborated with a colleague and a faculty advisor in creating a voxel game engine using C++ and the BGFX rendering library. The primary focus of the engine is to test out different optimization techniques and rendering algorithms to 
              achieve high performance in chunk generation and frame rates, and benchmarking which techniques are the most effective in improving performance. The engine will also include lighting and shadowing techniques, as well as a physics engine to simulate destruction and creation."
              imagePath={HighPerformanceVoxelEngine}
            />
          </div>
          <div className="projects-list reveal-on-scroll">
            <Project
              title={<h1>Python Wordle Clone</h1>}
              description="A Python project that clones the Wordle game."
              imagePath={wordie2Image}
              githubUrl={"https://github.com/viccon23/WordleGamepy"}
            />
          </div>
          <div className="projects-list reveal-on-scroll">
            <Project
              title={<h1>ChatGPT Discord Bot</h1>}
              description="Utilizing OpenAI's API, this custom made Discord bot will answer prompts from users who send messages through a text channel."
              imagePath={GPT2}
              githubUrl={"https://github.com/viccon23/GPTBot"}
            />
          </div>
          <div className="projects-list reveal-on-scroll">
            <Project
              title={<h1>Music Playlist Management System</h1>}
              description="Create a Playlist, add or remove tracks, move tracks around playlist, toggle as favorite, and more in this C++ Music Management System using vectors and linked lists."
              imagePath={cpp1}
              githubUrl={"https://github.com/viccon23/Music-Playlist"}
            />
          </div>
      </div>

    <div className="continuation reveal-on-scroll" style = {{display: 'flex', width: '85%', justifyContent: 'center', alignItems: 'center', margin: '0 auto'}}></div>

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
        I've been around technology all my life. Computers, phones, tablets. I wanted to learn all about how they function, as well as how programming is used to guide it, which I found to be very enjoyable and exciting. I am continuously learning new ideas and concepts, as well as software that is used
        to power it, and am excited to see where I'll stand as the years go by.
      </p>

      <p>
        This website is still in construction, and as time passes, more features will be added. Until then, thanks for visiting, and enjoy your time here.
      </p>
    </>
  )
};

function NameTitle() {
  return (
    <div className='FrontPageTitle'>
      <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {' '}
        <span style={{fontWeight: 'bold' }}>
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
  )
};

function Project({ title, description, imagePath, githubUrl }) {
  return (
    <div className="project-container">
        <div className="project-info">
          <h2>{title}</h2>
          <p>{description}</p>
          {githubUrl && <GitHubLink url={githubUrl} />}
        </div>
        <div className="project-image">
            <img src={imagePath} alt={title} />
          </div>
    </div>
  );
}

function GitHubLink({ url }) {
  return (
    <div className="github-link">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github" style={{ fontSize: '70px' }}></i>
      </a>
    </div>
  );
}


