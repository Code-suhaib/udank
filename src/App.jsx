import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/courses" element={<h1>Courses</h1>} />
        <Route path="/admissions" element={<h1>Admissions</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
