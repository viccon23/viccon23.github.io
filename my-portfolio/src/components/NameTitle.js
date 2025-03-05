import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function NameTitle({ title }) {
  return (
    <>
        <div className='FrontPageTitle'>
        <h1 style={{ paddingTop: '1rem'}}>
            {' '}
            <span>
            <Typewriter
                words={[title]}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                delaySpeed={1500}
            />
            </span>
        </h1>
        <div className="button-container">
            <Link to="/" className="button">Home</Link>
            <Link to="/about" className="button">About Me</Link>
            <Link to="/experience" className="button">Experience</Link>
            <Link to="/projects" className="button">Projects</Link>
            <Link to="/research" className="button">Research</Link>
        </div>
        </div>
    </>
  );
}

export default NameTitle;