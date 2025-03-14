import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./home.css";

function Home() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center"> 
        {/* Left Side - Text (6 columns) */}
        <Col md={6}>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.5 }}
            className="fade-in"
          >
            Welcome to UdanK Coaching Classes
          </motion.h1>

          <motion.p 
            className="lead"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 2 }}
          >

           <b> Empowering students with quality education and guidance.</b>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 2.5 }}
          >
            <Button variant="warning" href="/courses">Explore Courses</Button>
          </motion.div>
        </Col>

        {/* Right Side - Image (6 columns) */}
        <Col md={6}  sm={12}  className="text-center image">
          <motion.img 
            src="/home_image.jpg" // Correct path for public folder
            alt="Coaching Class"
            className="img-fluid rounded shadow-lg"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2}}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
