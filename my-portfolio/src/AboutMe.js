import React from 'react';
import NameTitle from './components/NameTitle';
import Footer from './components/Footer';
import './styles/AboutMe.css';
import image1 from './images/me2.jpg'; 
import image2 from './images/GPT2.jpg';
import image3 from './images/cpp1.png';
import image4 from './images/Wordie2.png';

function AboutMe() {
  return (
    <>
      <div className="page-wrapper">
        <div className="content-wrapper">
          <NameTitle title="About Me" />
          <div className="about-me-container">
            <div className="content-container">
            <div className="bio-text">
              <div className="terminal-bio">
                <div className="terminal-header">
                  <span>$ cat aboutme.txt</span>
                </div>
                <div className="bio-content">
                  <p className="bio">
                    I was born in Brownsville, Texas, a city located on the U.S-Mexican border, right next to the Gulf of <del>Mexico</del> America. 
                    I developed an interest for computers at a young age, but I had never took it upon myself to learn programming until I started my first semseter of college because of the heavy learning curve (or so I thought). Throughout my undergrad, I've dabbled in different electives
                    including Web Development, Game Development, Computer Networks, and Data Mining, and found myself to be interested specifically in artificial intelligence and software engineering.
                  </p>
                  <p className="bio">
                    When I'm not coding, you'll catch me at thrift shops or Mom-and-Pop stores. I'm a huge fan of vintage technology and a niche I have is collecting physical video games (Currently &gt;300) and video game collectibles. I also DJ as a hobby (Not professionally)
                    and mess around with DAW's for music production.
                  </p>
                </div>
              </div>
            </div>
            <div className="image-collage">
              {<img src={image1} alt="Image 1" className="collage-image image1" />
              /* <img src={image2} alt="Image 2" className="collage-image image2" />
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
