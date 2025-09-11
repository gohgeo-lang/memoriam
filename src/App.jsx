import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import FuneralInfo from "./pages/FuneralInfo";
import Products from "./pages/Products";
import Memoriam from "./pages/Memoriam";
import HumanMemoriam from "./pages/memoriam/HumanMemoriam";
import PetMemoriam from "./pages/memoriam/PetMemoriam";
import Support from "./pages/Support";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/funeral" element={<FuneralInfo />} />
          <Route path="/products" element={<Products />} />
          <Route path="/memoriam" element={<Memoriam />} />
          <Route path="/memoriam/human" element={<HumanMemoriam />} />
          <Route path="/memoriam/pet" element={<PetMemoriam />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
