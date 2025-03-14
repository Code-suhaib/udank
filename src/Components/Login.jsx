import { Link } from "react-router-dom";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";

function Login() {
    return (
        <Container className="login-container mt-5 mb-5">
            <Row className="justify-content-center align-items-center">
                <Col md={6} className="text-center">
                    <img src="/Logo.png" alt="Login" className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h2 className="text-center">Login</h2>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label><FaEnvelope /> Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label><FaLock /> Password:</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">Login</Button>
                    </Form>
                    <p className="text-center mt-3">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;