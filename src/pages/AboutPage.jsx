import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="text-center mb-4 fw-bold">About Us</h1>

          <p className="lead">
            Welcome to <strong>Astro Utils</strong>, your personal gateway to
            self-discovery and deeper insight. We combine the ancient wisdom of
            numerology with modern technology to create personalized personality
            and life goal reports — all based on just your{" "}
            <strong>Date of Birth</strong> and <strong>Full Name</strong>.
          </p>

          <p>
            Our core feature is the <strong>Lo Shu Grid</strong> — a powerful
            numerological tool derived from your birth data that reveals
            patterns, strengths, and hidden energies within you. By analyzing
            your numbers, Astro Utils gives you a clearer understanding of:
          </p>

          <ul className="list-unstyled ps-3">
            <li>✅ Your core personality traits</li>
            <li>✅ Life goals and challenges</li>
            <li>✅ Potential career strengths</li>
            <li>✅ Emotional tendencies and behavioral patterns</li>
          </ul>

          <p>
            Getting started is simple: just enter your <strong>full name</strong>{" "}
            and <strong>date of birth</strong> on our homepage, and our system
            will instantly generate your personalized numerology grid and
            interpretation.
          </p>

          <p>
            Whether you're exploring for fun, seeking guidance, or just curious
            about what your numbers say about you —{" "}
            <strong>Astro Utils</strong> is your companion on the path to deeper
            self-knowledge.
          </p>

          <p className="fst-italic text-center mt-4 fs-5">
            🔮 Discover your true self with Astro Utils.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;