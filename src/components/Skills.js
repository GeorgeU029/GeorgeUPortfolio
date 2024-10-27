import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Java', icon: 'images/java.png' },
    { name: 'JavaScript', icon: 'images/javascript-logo-javascript-icon-transparent-free-png.webp' },
    { name: 'HTML', icon: 'images/HTML5_Badge.svg' },
    { name: 'CSS', icon: 'images/css.png' },
    { name: 'Python', icon: 'images/python-logo.png' },
    { name: 'React', icon: 'images/React.webp' },
    { name: 'Git', icon: 'images/giticon.png' }
  ];

  return (
    <div id="skills" className="skills-container">
      <section className="skills">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img className="skill-icon" src={skill.icon} alt={`${skill.name} Icon`} />
              <div className="skill-name">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
