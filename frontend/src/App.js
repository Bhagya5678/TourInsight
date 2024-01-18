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


function App() {
  const staticData = {
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    stars: 4.5,
    numRatings: 120,
    title: 'Sample Product',
    price: 49.99,
    expectedPrice: 39.99,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };
  return (
    <div>
      <ProductFullscreen data={data} />
    {/* <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp isSignedinvar={false} />}/>
        <Route exact path="/category" element={<Cards/>}/>
        <Route exact path="/category/transportation" element={<Transportation/>}/>
        <Route exact path="/category/transportation/:id" element={<ProductFullscreen/>}/>
        <Route exact path="/category/restaurant" element={<Restaurant />}/>
      </Routes>
    </Router>
    </React.StrictMode>
  </div>
  );
}

export default App;
