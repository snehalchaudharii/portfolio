import "./App.css";
import Header from "./components/Header";
import "./assets/style/common.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />{" "}
          {/* Redirect default route */}
          <Route path="/home" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
