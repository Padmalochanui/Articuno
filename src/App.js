import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Components/Mainpage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Components/Accounts/Login';
import Signup from './Components/Accounts/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
