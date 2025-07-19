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
                I was born in Brownsville, Texas, a city located "On the Border, by the Sea. I've always grown up with technology, and so
                I developed a passion for it at a young age, but I had never took it upon myself to learn programming until I started my first semseter because of the heavy learning curve. Throughout my undergrad, I've dabbled in different electives
                including Web Development, Game Development, Computer Networks, and Data Mining, and found myself to be interested specifically in artificial intelligence and software engineering.
              </p>
              <p className="bio">
                When I'm not coding, you'll catch me at thrift shops or Mom-and-Pop stores. I'm a huge fan of vintage technology and a niche I have is collecting physical video games (Currently >300) and video game collectibles. I also DJ as a hobby (Not professionally)
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
