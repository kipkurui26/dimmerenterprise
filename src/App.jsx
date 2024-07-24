import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navigation/NavBar";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
