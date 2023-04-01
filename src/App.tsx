import React, { useEffect } from "react";
import Navbar from "./components/FixedComponents/Navbar/Navbar";
import SeePlants from "./components/SeePlant/SeePlant";
import Home from "./components/Home/Home";
import VisitorForm from "./components/Form/VisitorForm";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App(): JSX.Element {

  return (
    <div className={`App   `}>
      <Router>

        <Navbar />
        <div className=" mt-10 flex flex-col md:w-10/12 mr-auto ml-auto">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/visitorForm" Component={VisitorForm} />
            <Route path="/seePlant" Component={SeePlants} />
          </Routes>
        </div>
      </Router>
    </div >
  );
}

export default App;
