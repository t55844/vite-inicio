import React from "react";
import Navbar from "./components/FixedComponents/Navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VisitorForm from "./components/Form/VisitorForm";
import SeeAnimals from "./components/SeeAnimals/SeeAnimals";
import Home from "./components/Home/Home";

function App(): JSX.Element {
  return (
    <div className={`App  `}>
      <Router>

        <Navbar />
        <div className="md:m-10 flex flex-col">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/visitorForm" Component={VisitorForm} />
            <Route path="/seeAnimals" Component={SeeAnimals} />
          </Routes>
        </div>
      </Router>
    </div >
  );
}

export default App;
