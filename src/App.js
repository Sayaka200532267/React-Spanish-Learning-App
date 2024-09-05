import React from "react";
// Import shared components
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";
// Import react-router-dom for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import components for each page
import Home from "./views/Home"; 
import Holidays from "./views/Holidays.js"; 
import Greetings from "./views/Greetings.js";
import AboutSpanish from "./views/AboutSpanish.js";
// Import a NotFound component for handling undefined routes
import NotFound from "./views/404.js";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/greetings" element={<Greetings />} />
          <Route path="/aboutspanish" element={<AboutSpanish />} />
          <Route path="/404" element={<NotFound/>} /> {/* Catch-all route */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
  
export default App;