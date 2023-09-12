import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import OurTeams from "./Components/OurTeams/OurTeams";
import Contact from "./Components/Contact/Contact";
import About from "./Pages/AboutUs";
import Services from "./Pages/ServicesPg";
import ButtonBar from "./Components/ButtonBar/ButtonBar";
import Minimalist from "./Components/Minimalist/Minimalist";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/ourteams/" element={<OurTeams />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="minimalist/:mini" element={ <Minimalist />} />
      </Routes>
      <ButtonBar />
    </React.Fragment>
  );
}

export default App;
