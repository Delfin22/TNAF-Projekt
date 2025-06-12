import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MovieApp from "./pages/MovieApp";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={styles.appWrapper}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie-app" element={<MovieApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
