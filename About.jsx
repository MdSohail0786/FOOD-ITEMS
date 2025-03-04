// src/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to Foodie, your number one source for all things food
          delivery. We're dedicated to giving you the very best of food, with a
          focus on dependability, customer service, and uniqueness.
        </p>
        <p>
          Founded in 2023, Foodie has come a long way from its beginnings. When
          we first started out, our passion for delivering delicious meals drove
          us to do tons of research, so that Foodie can offer you the world's
          most delicious food delivery service.
        </p>
        <p>
          We now serve customers all over the country and are thrilled that
          we're able to turn our passion into our own website.
        </p>
        <a href="#menu" className="about-button">
          Check Our Menu
        </a>
      </div>
    </section>
  );
};

export default About;
