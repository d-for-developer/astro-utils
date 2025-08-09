import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="text-center mb-4 fw-bold">Contact Us</h1>

          <p className="lead text-center mb-5">
            We'd love to hear from you! Whether you have a question, suggestion, or found an issue, 
            feel free to reach out. <strong>Astro Utils</strong> is here to make your numerology journey insightful and enjoyable.
          </p>

          <Row className="g-4">
            {/* Developer 1 */}
            <Col md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">Sandeep Rawat</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:sandy4u1994@gmail.com" className="text-decoration-none">
                      sandy4u1994@gmail.com
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <strong>GitHub Repository:</strong>{" "}
                    <a
                      href="https://github.com/d-for-developer/astro-utils"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      github.com/d-for-developer/astro-utils
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Developer 2 */}
            <Col md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">Gowthami Priya, Meka</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:mgowthamipriya312@gmail.com" className="text-decoration-none">
                      mgowthamipriya312@gmail.com
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <strong>GitHub Repository:</strong>{" "}
                    <a
                      href="https://github.com/d-for-developer/astro-utils"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      github.com/d-for-developer/astro-utils
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <p className="fst-italic text-center mt-5 fs-5">
            💬 We appreciate your feedback and are constantly improving.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
