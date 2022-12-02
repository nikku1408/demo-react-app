import "./App.css";
import About from "./components/header/About";
import Contact from "./components/header/ContactUs";
import Home from "./components/header/Home";
import Services from "./components/header/Services";
import Clients from "./components/header/Clients";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
