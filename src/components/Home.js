import React from 'react';
import Particles from 'react-tsparticles';
import './Home.css';

const Home = () => {
  return (
    <div id="home" className="back-ground-header-img">
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          particles: {
            color: { value: "#3CA9D1" },
            links: { enable: true, color: "#3CA9D1" },
            move: { enable: true, speed: 3 },
            number: { value: 50 },
          },
        }}
      />
      <div className="intro-container">
        <div className="intro-text">
          <h1 className="name">Hey I'm George Ulloa!</h1>
          <section className="content-section container">
            <h2>
              <p>I’m a junior studying Computer Science at FIU, driven by a love for problem-solving in software 
                engineering. I’m looking for an internship where I can contribute fresh ideas and expand my experience. 
                I am Excited to connect and collaborate!</p>
            </h2>
          </section>
          <div className="contact-me-container">
            <a href="mailto:Georgeulloa.fl@gmail.com" className="contact-button">Contact Me</a>
            <a href="/images/George UlloaRESUME .pdf" className="contact-button">Resume</a>
          </div>
        </div>
        <div className="intro-image">
          <img src="/images/profPicOfMe.jpg" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
