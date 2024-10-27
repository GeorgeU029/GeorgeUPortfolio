import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="socials-container">
      <section className="socials">
        <h1 className="socials-title">Contact Me!</h1>
        <div className="socials-list">
          {[
            {
              href: "mailto:Georgeulloa.fl@gmail.com",
              icon: "/images/Gmail_Logo_512px.png",
              alt: "Gmail Icon",
              name: "Gmail",
            },
            {
              href: "https://github.com/GeorgeU029",
              icon: "/images/github.png",
              alt: "GitHub Icon",
              name: "Github",
            },
            {
              href: "https://www.linkedin.com/in/george-ulloa-/",
              icon: "/images/linkin.png",
              alt: "LinkedIn Icon",
              name: "LinkedIn",
            },
          ].map((social, index) => (
            <motion.div
              className="socials-card"
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <img
                  className="socials-icon"
                  src={social.icon}
                  alt={social.alt}
                />
                <div className="socials-name">{social.name}</div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
