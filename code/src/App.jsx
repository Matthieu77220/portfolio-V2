import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing.jsx";
import Content from "./Content.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
