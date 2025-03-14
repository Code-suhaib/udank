import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/> } />
        <Route path="/courses" element={<h1>Courses</h1>} />
        <Route path="/admissions" element={<h1>Admissions</h1>} />
        <Route path="/contact" element={<h1>Contact Us</h1>} />
       
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
