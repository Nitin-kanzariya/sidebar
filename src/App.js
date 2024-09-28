import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Demo from "./Demo";
import "./App.css";
// You can add additional components if you have other routes

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Demo />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
