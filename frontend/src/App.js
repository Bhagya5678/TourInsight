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
function App() {
  return (
    <div>
    <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp isSignedinvar={false} />}/>
      </Routes>
    </Router>
    </React.StrictMode>
  </div>
  );
}

export default App;
