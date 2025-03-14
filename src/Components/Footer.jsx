import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // Import custom CSS

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="text-center text-md-start">
          {/* Left: About Us */}
          <Col md={4} className="footer-about">
            <h5>About UdanK</h5>
            <p>
              UdanK Coaching provides expert guidance for NEET & JEE aspirants, helping students achieve their dreams with structured learning and mentorship.
            </p>
          </Col>

          {/* Center: Quick Links */}
          <Col md={4} className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          {/* Right: Contact Info */}
          <Col md={4} className="footer-contact">
            <h5>Contact Us</h5>
            <p>Email: contact@udankcoaching.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: 123, Education Street, Delhi, India</p>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="text-center mt-3">
          <Col>
            <p className="footer-bottom">
              &copy; {new Date().getFullYear()} UdanK Coaching. All Rights Reserved.
            </p>
            <p className="developer-credit">
              Designed & Developed by <strong>Suhaib Jahagirdar</strong> ❤️
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
