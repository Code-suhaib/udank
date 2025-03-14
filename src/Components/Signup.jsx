import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./Signup.css";

function Signup() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform sign-up logic here (e.g., API call)

        // Redirect to the login page after successful signup
        navigate("/login");
    };

    return (
        <Container className="signup-container">
            <Row className="justify-content-center align-items-center">
                <Col md={6} className="text-center">
                    <img src="/Logo.png" alt="Signup" className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h2 className="text-center">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label><FaUser /> Full Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" required />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label><FaEnvelope /> Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label><FaLock /> Password:</Form.Label>
                            <Form.Control type="password" placeholder="Create a password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">Sign Up</Button>
                    </Form>
                    <p className="text-center mt-3">Already have an account? <Link to="/login">Login</Link></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
