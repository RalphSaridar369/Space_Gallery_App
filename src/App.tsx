import "./App.css";
import ItemDetailed from "./pages/home/components/ItemDetailed";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Apod from "./pages/apod/Apod";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/apod/" element={<Apod />} />
          <Route path="/:id" element={<ItemDetailed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
