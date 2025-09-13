import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Guide from "./pages/Guide/Guide";

import Memoriam from "./pages/Service/Service-memoriam/Memoriam";
import Estimate from "./pages/Service/Service-estimate/Estimate";
import Photo from "./pages/Service/Service-photo/Photo";

import Support from "./pages/Support/Support";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/memoriam" element={<Memoriam />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
