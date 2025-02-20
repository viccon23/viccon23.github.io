import React from 'react';
import './styles/AboutMe.css';
import NameTitle from './components/NameTitle';
import Footer from './components/Footer';
import image1 from './images/me.jpg'; 
import image2 from './images/GPT2.jpg';
import image3 from './images/cpp1.png';
import image4 from './images/Wordie2.png';

function AboutMe() {
  return (
    <>
      <div className="page-wrapper">
      < div className="content-wrapper">
        <div className="about-me-container">
          <NameTitle title="About Me" />
          <div className="content-container">
            <div className="bio-text">
              <p className="bio">
                I started my programming journey in August 2022. I've dabbled in different electives
                including web development, game development, Computer Networks, and Data Mining. I found myself to be interested in AI, specifically Deep Learning, and will be focusing on this field
                through my masters prgram.
              </p>
              <p className="bio">
                When I'm not coding, you'll catch me at thrift shops or Mom-and-Pop stores. I'm a huge fan of vintage technology and a niche I have is collecting physical video games (Currently at 300) and merchandise. I also DJ as a hobby (Not professionally)
                and mess around with DAW's for music production.
              </p>
            </div>
            <div className="image-collage">
              {/* <img src={image1} alt="Image 1" className="collage-image image1" />
              <img src={image2} alt="Image 2" className="collage-image image2" />
              <img src={image3} alt="Image 3" className="collage-image image3" />
              <img src={image4} alt="Image 4" className="collage-image image4" /> */}
            </div>
          </div>
        </div>
       </div>
       <Footer />
      </div>
    </>
  );
}

export default AboutMe;
