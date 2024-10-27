import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Music Visualizer',
      link: 'https://vidaaudio.us',
      image: 'images/VidaAudioDisplay2.png',
      description: 'Built a dynamic web-based music visualizer using real-time audio analysis and mathematical wave functions to create immersive, responsive visual patterns.'
    },
    {
      title: 'League Stats',
      link: 'https://github.com/GeorgeU029/LeagueStats',
      image: 'images/Screenshot 2024-10-26 at 3.32.24 PM.png',
      description: 'Developed a responsive League of Legends stats website using a Python backend with Flask and a React frontend to fetch and display real-time match and player statistics through API integration'
    }
  ];

  return (
    <div id="projects" className="projects-container">
      <section className="projects">
        <h1 className="projects-title">Projects</h1>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="project-header">
                <div className="project-details">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <h3>{project.title}</h3>
                  </a>
                </div>
              </div>
              {project.image && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img className="project-display" src={project.image} alt={project.title} />
                </a>
              )}
              <p className="project-description">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
