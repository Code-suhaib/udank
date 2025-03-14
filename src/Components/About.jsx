import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./About.css"; // Import custom CSS

const About = () => {
  return (
    <Container className="about-section mt-5">
      <Row className="align-items-center">
        {/* Left Side: Image */}
        <Col md={6} className="image-container">
          <Image 
            src="/About.jpg" // Ensure the image is in the public folder
            alt="About Us"
            fluid
            className="fade-in"
          />
        </Col>

        {/* Right Side: Text */}
        <Col md={6} className="text-container fade-in">
          <h2 className="about-title">About UdanK Coaching</h2>
          <p className="about-text">
            Welcome to <strong>UdanK Coaching Classes</strong>, a leading institute dedicated to shaping the careers of **NEET & JEE** aspirants. Our institute is built on the foundation of **quality education, expert mentorship, and a well-structured study plan**.
          </p>
          <p className="about-text">
            With a **team of IITians, doctors, and experienced faculty**, we ensure that every student gets personalized attention, detailed subject explanations, and a **result-driven preparation strategy**.
          </p>
        </Col>
      </Row>

      {/* Why Choose Us Section */}
      <Row className="why-choose-us fade-in">
        <Col md={12}>
          <h3 className="section-title">Why Choose UdanK Coaching?</h3>
        </Col>
        
        <Col md={4} className="feature-box">
          <h4>📚 Comprehensive Study Material</h4>
          <p>Our well-researched materials cover **NEET & JEE** syllabus in depth, ensuring conceptual clarity and exam readiness.</p>
        </Col>

        <Col md={4} className="feature-box">
          <h4>🧑‍🏫 Expert Faculty</h4>
          <p>Learn from **IITians, medical professionals, and top educators** with years of teaching experience.</p>
        </Col>

        <Col md={4} className="feature-box">
          <h4>📝 Regular Tests & Analysis</h4>
          <p>Our weekly mock tests and detailed performance analysis help students track progress and improve continuously.</p>
        </Col>

        <Col md={4} className="feature-box">
          <h4>🔍 Personalized Mentorship</h4>
          <p>Every student gets **one-on-one mentorship and doubt-clearing sessions** to ensure they stay on the right track.</p>
        </Col>

        <Col md={4} className="feature-box">
          <h4>📊 AI-Based Performance Tracking</h4>
          <p>We use **AI-powered analytics** to track performance and recommend personalized strategies for improvement.</p>
        </Col>

        <Col md={4} className="feature-box">
          <h4>🏆 Proven Success Record</h4>
          <p>Hundreds of our students have **secured top ranks in NEET & JEE**, making their dream careers a reality.</p>
        </Col>
      </Row>

      {/* Call to Action Section */}
      <Row className="call-to-action text-center fade-in">
        <Col md={12}>
          <h3 className="cta-title">Join UdanK Coaching Today!</h3>
          <p className="cta-text">
            Get the best guidance for **NEET & JEE** from India's top educators. Start your journey towards success now!
          </p>
          <Button variant="warning" href="/contact">Enroll Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
