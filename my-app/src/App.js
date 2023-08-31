import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import OurTeams from "./Components/OurTeams/OurTeams";
import Contact from "./Components/Contact/Contact";
import About from "./Pages/AboutUs";
import ServicesPg from "./Pages/ServicesPg";
import ButtonBar from "./Components/ButtonBar/ButtonBar";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about/" element={ <About /> } />
        <Route path="/service/" element={ <ServicesPg />} />
        <Route path="/ourteams/" element={ <OurTeams />} />
        <Route path="/contact/" element={<Contact/>}/>
      </Routes>
      <ButtonBar />
    </React.Fragment>
  );
}

export default App;
