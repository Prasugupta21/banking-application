import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Transfer from './components/Transfer';
import About from './components/About';
import Features from './components/Features';
function App() {

  return (
    <div className="bg-gradient-to-r from-[#090909] to-[#420842] overflow-x-clip ">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="transaction/deposit" element={<Deposit
           />} />
        <Route path="transaction/withdraw" element={<Withdraw
           />} />
        <Route path="transaction/transfer" element={<Transfer
           />} />
        <Route path="/signup" element={<Signup
           />} />
        <Route path="/dashboard" element={<Dashboard
           />} />
        <Route path="/about" element={<About
           />} />
        <Route path="/features" element={<Features
           />} />

        </Routes>
    </div>
  );
}



export default App;
