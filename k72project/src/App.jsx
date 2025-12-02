import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { Link } from "react-router-dom";
import Navbar from "./components/navigation/Navbar.jsx";
import FullScreenNav from "./components/navigation/FullScreenNav.jsx";


function App() {

  return (
    <div className="text-white overflow-x-hidden">
      <Navbar/>
      <FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
