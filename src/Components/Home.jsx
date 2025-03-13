import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to UdanK Coaching Classes</h1>
      <p className="lead">Empowering students with quality education and guidance.</p>
      <Button variant="warning" href="/courses">Explore Courses</Button>
    </Container>
  );
}

export default Home;