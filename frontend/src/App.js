import Navbar from "./components/Navbar"
import './App.css';
import SignUp from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <SignUp isSignedinvar={false}/>
    </div>
  );
}

export default App;
