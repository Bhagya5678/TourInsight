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
import TransportationList from "./category/Transportation";
// import Restaurant from "./category/RestaurantList"
import RestaurantList from "./category/RestaurantList";
function App() {
  return (
    <div>
      <ProductFullscreen data={data} />
    <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp isSignedinvar={false} />}/>
        <Route exact path="/category" element={<Cards/>}/>
        <Route exact path="/category/transportation" element={<TransportationList/>}/>
        <Route exact path="/category/transportation/:id" element={<ProductFullscreen/>}/>
   
      </Routes>
    </Router>
    </React.StrictMode>
  </div>
  );
}

export default App;
