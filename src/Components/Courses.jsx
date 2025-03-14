import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./courses.css";

const courses = [
  {
    id: 1,
    title: "Mathematics",
    description: "Master concepts of Algebra, Geometry, Trigonometry, and Calculus with our expert teachers.",
    image: "./Maths.jpg",
  },
  {
    id: 2,
    title: "Physics",
    description: "Understand the laws of physics and their real-world applications with in-depth concepts and problems.",
    image: "./Physics.jpg",
  },
  {
    id: 3,
    title: "Chemistry",
    description: "Explore the world of atoms, molecules, and chemical reactions with interactive learning.",
    image: "./chemistry.jpg",
  },
  {
    id: 4,
    title: "Class 9 - Science & Maths",
    description: "Complete syllabus coverage for Class 9 with expert guidance in Maths and Science.",
    image: "./class 9.jpg",
  },
  {
    id: 5,
    title: "Class 10 - Science & Maths",
    description: "Comprehensive coaching for Class 10 students to build strong foundations in core subjects.",
    image: "./class 9.jpg",
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
                  <Button variant="primary">Enroll Now</Button>
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
