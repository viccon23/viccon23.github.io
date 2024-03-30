import React from 'react';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './styles/App.css';
import me from './images/me.jpg'; import wordie2Image from './images/Wordie2.png';
import cpp1 from './images/cpp1.png';
import GPT2 from './images/GPT2.jpg';



function App() {
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

      <div className="container continuation reveal-on-scroll">
        <p> Below are some Projects I have currently done:</p>
      </div>

      <div className=" main-page container projectCards">
          <div className="projects-list reveal-on-scroll">
            <Project
              title=<h1>Python Wordle Clone</h1>
              description="A Python project that clones the Wordle game."
              imagePath={wordie2Image}
              githubUrl={"https://github.com/viccon23/WordleGamepy"}
            />
          </div>
          <div className="projects-list reveal-on-scroll">
            <Project
              title=<h1>ChatGPT Discord Bot</h1>
              description="Utilizing OpenAI's API, this custom made Discord bot will answer prompts from users who send messages through a text channel."
              imagePath={GPT2}
              githubUrl={"https://github.com/viccon23/GPTBot"}
            />
          </div>
          <div className="projects-list reveal-on-scroll">
            <Project
              title=<h1>Music Playlist Management System</h1>
              description="Create a Playlist, add or remove tracks, move tracks around playlist, toggle as favorite, and more in this C++ Music Management System using vectors and linked lists."
              imagePath={cpp1}
              githubUrl={"https://github.com/viccon23/Music-Playlist"}
            />
          </div>
      </div>

        <div className="container continuation reveal-on-scroll">
      <p> Want to hire me? Feel free to send me an email below, or any of my contact info on the social media links.</p>
    </div>
    </>
    
  );
}

export default App;


function Introduction() {
  return (
    <>
      <p>
          Hello, my name is Victor and I'm a Computer Science student at UTRGV. This website began on April 29, 2023, and will be continually updated to feature personal projects and anything new that is well.... worth including in a personal website.
    I am currently insterested in Networking, Web Development, Software Engineering and Machine Learning.
      </p>

      <p>
        My interests currently lie in Machine Learning and an occasional dabble in Web Development. 
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

          <GitHubLink url={githubUrl} />
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


