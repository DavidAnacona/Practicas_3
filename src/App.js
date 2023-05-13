import React from 'react';
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Login from './pages/auth/login'
import Home from "./pages/home/index"
import Register from './pages/auth/register'
import Politics from "./pages/politics/index"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/politics" element={<Politics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;