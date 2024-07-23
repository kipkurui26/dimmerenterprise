import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navigation/NavBar";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
