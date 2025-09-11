import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FuneralInfo from "./pages/FuneralInfo/FuneralInfo";
import Products from "./pages/Products/Products";

import Memoriam from "./pages/Memoriam/MemoriamPage";
import HumanMemoriam from "./pages/Memoriam/HumanMemoriam/HumanMemoriam";
import PetMemoriam from "./pages/Memoriam/PetMemoriam/PetMemoriam";

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
