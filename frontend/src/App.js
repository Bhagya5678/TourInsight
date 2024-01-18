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
import ProductFullscreen from '../src/Fullscreen/ProductFullscreen';
import Cards from "./components/Cards";
import TransportationList from "./category/Transportation";
// import Restaurant from "./category/RestaurantList"
import RestaurantList from "./category/RestaurantList";
import RestaurantFullScreen from "./Fullscreen/RestaurantCard";
import PasswordGenerator from "./components/Searchbar";
import Footer from "./components/Footer";
import AccomodationList from "./category/AccomodationList";
import AccomodationCard from "./Fullscreen/AccomodationCard";
import ShoppingList from "./category/ShoppingList";
import ShoppingCard from "./Fullscreen/ShoppingCard";
import TouristList from "./category/TouristList";
import Searchbar from "./components/Searchbar";
function App() {
  return (
    <div>
      <Navbar />
      <Searchbar/>
      <Footer/>
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
        <Route exact path="/category/accomodation" element={<AccomodationList/>}/>
        <Route exact path="/category/accomodation/:id" element={<AccomodationCard />}/>
        <Route exact path="/category/Shopping" element={<ShoppingList/>}/>
        <Route exact path="/category/Shopping/:id" element={<ShoppingCard />}/>
        <Route exact path="/category/Tourist" element={<TouristList/>}/>
        {/* <Route exact path="/category/Tourist/:id" element={<ShoppingCard />}/> */}

        {/* <Route exact path="/vendor" element={<PasswordGenerator/>}/>
        <Route exact path="/vendorlistings" element={<PasswordGenerator/>}/>

      </Routes>
    </Router>
    </React.StrictMode> */} 
  </div>
  );
}

export default App;
