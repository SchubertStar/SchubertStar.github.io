import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <main>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
    </>
  )
}