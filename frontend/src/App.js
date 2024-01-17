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

const data = {
  id: '1-18',
  images: ['https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80'],
  info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eum, alias ipsum asperiores, fugiat consectetur earum ratione omnis illum exercitationem cumque reiciendis ipsa architecto? Praesentium perferendis excepturi enim neque labore!",
  title: 'Product Title',
  price: 2500,
  longitude: 546,
  latitude: 657,
  numRatings: 53,
  MLPricePredict: 2650,
  stars: 4,
  address: "business address abc123"
};

function App() {
  return (
    <div>
      <ProductFullscreen data={data} />
    {/* <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp isSignedinvar={false} />}/>
      </Routes>
    </Router>
    </React.StrictMode> */}
  </div>
  );
}

export default App;
