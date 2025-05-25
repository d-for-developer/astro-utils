import React from "react";
import "../assets/css/about.css"; // Create this CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <h1 className="about-heading">About Us</h1>
      <p className="about-paragraph">
        Welcome to <strong>Astro Utils</strong>, your personal gateway to self-discovery and deeper insight. We combine the ancient wisdom of numerology with modern technology to create personalized personality and life goal reports — all based on just your <strong>Date of Birth</strong> and <strong>Full Name</strong>.
      </p>

      <p className="about-paragraph">
        Our core feature is the <strong>Lo Shu Grid</strong> — a powerful numerological tool derived from your birth data that reveals patterns, strengths, and hidden energies within you. By analyzing your numbers, Astro Utils gives you a clearer understanding of:
      </p>

      <ul className="about-list">
        <li>Your core personality traits</li>
        <li>Life goals and challenges</li>
        <li>Potential career strengths</li>
        <li>Emotional tendencies and behavioral patterns</li>
      </ul>

      <p className="about-paragraph">
        Getting started is simple: just enter your <strong>full name</strong> and <strong>date of birth</strong> on our homepage, and our system will instantly generate your personalized numerology grid and interpretation.
      </p>

      <p className="about-paragraph">
        Whether you're exploring for fun, seeking guidance, or just curious about what your numbers say about you — <strong>Astro Utils</strong> is your companion on the path to deeper self-knowledge.
      </p>

      <p className="about-paragraph signature">
        🔮 Discover your true self with Astro Utils.
      </p>
    </div>
  );
};

export default AboutUs;
