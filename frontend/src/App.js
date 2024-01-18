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
import RestaurantFullScreen from "./RestaurantCard";
import PasswordGenerator from "./components/Searchbar";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import EditUserProfile from "./components/editUserProfile";

function App() {
  return (
    <div>
      <Navbar/>
    {/* <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<PasswordGenerator/>}/>
        <Route exact path="/login" element={<SignUp isSignedinvar={false} />}/>
        <Route exact path="/category" element={<Cards/>}/>
        <Route exact path="/category/transportation" element={<TransportationList/>}/>
        <Route exact path="/category/transportation/:id" element={<ProductFullscreen/>}/>
        <Route exact path="/category/restaurant" element={<RestaurantList/>}/>
        <Route exact path="/category/restaurant/:id" element={<RestaurantFullScreen/>}/>
      </Routes>
    </Router>
    </React.StrictMode> */}
  </div>
  );
}

export default App;
