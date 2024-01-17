import Navbar from "./components/Navbar"
import './App.css';
import SignUp from "./pages/Signup";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom'
import { AppProvider } from "./Context";
import ProductFullscreen from './ProductFullscreen';
import Cards from "./components/Cards";
import Transportation from "./category/Transportation";
import Restaurant from "./category/Restaurant";

function App() {
  return (
    <div>
    <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp isSignedinvar={false} />}/>
        <Route exact path="/category" element={<Cards/>}/>
        <Route exact path="/category/transportation" element={<Transportation/>}/>
        <Route exact path="/category/restaurant" element={<Restaurant />}/>
      </Routes>
    </Router>
    </React.StrictMode>
  </div>
  );
}

export default App;
