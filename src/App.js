import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./Components/Container";
import Container2 from "./Components2/Components/Container"; // Adjust import path as needed
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/Krita-Calculator2" element={<Container2 />} />
      </Routes>
    </Router>
  );
}

export default App;
