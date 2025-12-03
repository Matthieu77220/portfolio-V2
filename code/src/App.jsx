import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "./Landing.jsx";
import Content from "./Content.jsx";
import Veille from "./components/Veille.jsx"
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Router basename="/portfolio-V2">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/content" element={<Content />} />
          <Route path="/veille" element={<Veille />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
