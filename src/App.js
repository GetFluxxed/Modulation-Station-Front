import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import List from "./components/List";
import Home from "./components/Home";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/list'
            element={<List />}
          />
        </Routes>
      </div>

    </Router>
  );
}

