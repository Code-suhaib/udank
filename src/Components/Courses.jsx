import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./courses.css";

const courses = [
  {
    id: 1,
    title: "JEE Preparation",
    description: "Crack JEE with expert guidance, comprehensive study materials, and regular mock tests.",
    image: "/iit-jee.jpg",
  },
  {
    id: 2,
    title: "NEET Preparation",
    description: "Ace NEET with in-depth concept clarity, practical problem-solving, and mock exams.",
    image: "/Neet.jpeg",
  },
  {
    id: 3,
    title: "IMU-CET Coaching",
    description: "Specialized coaching for IMU-CET aspirants, covering all essential topics with mock tests.",
    image: "/IMU-CET.jpg",
  },
  {
    id: 4,
    title: "NDA Coaching",
    description: "Prepare for NDA with top faculty, strategic preparation plans, and extensive practice sessions.",
    image: "/NDA.jpg",
  },
  {
    id: 5,
    title: "Class 11 - Science Board",
    description: "Complete syllabus coverage for Class 11 Science stream with expert guidance.",
    image: "/11th.jpg",
  },
  {
    id: 6,
    title: "Class 12 - Science Board",
    description: "Comprehensive coaching for Class 12 Science stream with in-depth explanations and practice.",
    image: "/12th.jpg",
  },
];

const Courses = () => {
  return (
    <motion.div 
      className="courses-container container mt-5 mb-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="text-center mb-4">Our Courses</h2>
      <Row>
        {courses.map((course) => (
          <Col key={course.id} md={4} className="mb-4">
            <motion.div 
              className="card course-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <Card.Img variant="top" src={course.image} alt={course.title} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Button variant="primary" as={Link} to="/contact">Enroll Now</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default Courses;
