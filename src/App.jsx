import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Header from "./components/Header";
import "./App.css";

import Dashboard2 from "./components/Dashboard2";

function App() {
  return (
    <Router>
      <Header />{" "}
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/about" element={<About />} />

        <Route path="/dashboard2" element={<Dashboard2 />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
