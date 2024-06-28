import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Features = () => {
    const {currUser}=useSelector(state=>state.user);
    const navigate=useNavigate();
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      
      
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-3xl sm:text-4xl font-bold   mb-8 bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">Our Features</h2>
        
        <div className="grid gap-8 md:grid-cols-3 w-full max-w-7xl">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-200 cursor-pointer ">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text mb-4">Deposit</h3>
            <p className="text-gray-600 mb-6">Easily deposit money into your account with just a few clicks. Our system ensures quick transactions.</p>
        {currUser ?            <button onClick={()=>navigate('/transaction/deposit')} className="bg-gradient-to-r from-[#090909] to-[#420842] text-white px-4 py-2 rounded-full  focus:outline-none  focus:ring-purple-500">Deposit Now</button>
 :(            <button onClick={()=>navigate('/login')} className="bg-gradient-to-r from-[#090909] to-[#420842] text-white px-4 py-2 rounded-full  focus:outline-none  focus:ring-purple-500">Deposit Now</button>
)}       
        
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-200 cursor-pointer">
            <h3 className="text-2xl font-bold  mb-4 bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">Withdraw</h3>
            <p className="text-gray-600 mb-6">Quickly withdraw money from your account at any time. Our service is fast, reliable, and secure.</p>
            {currUser ?            <button onClick={()=>navigate('/transaction/withdraw')} className="bg-gradient-to-r from-[#090909] to-[#420842] text-white px-4 py-2 rounded-full  focus:outline-none  focus:ring-purple-500">WithDraw Now</button>
 :(            <button onClick={()=>navigate('/login')} className="bg-gradient-to-r from-[#090909] to-[#420842] text-white px-4 py-2 rounded-full  focus:outline-none  focus:ring-purple-500">WithDraw Now</button>
)}           </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-200 cursor-pointer">
            <h3 className="text-2xl font-bold  mb-4 bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">Transfer</h3>
            <p className="text-gray-600 mb-6">Easily transfer money between accounts. Our platform supports seamless  transfers.</p>
            {currUser ?            <button onClick={()=>navigate('/transaction/transfer')} className="bg-gradient-to-r from-[#090909] to-[#420842] text-white px-4 py-2 rounded-full  focus:outline-none  focus:ring-purple-500">Transfer Now</button>
 :(            <button onClick={()=>navigate('/login')} className="bg-gradient-to-r from-[#090909] to-[#420842] text-white px-4 py-2 rounded-full  focus:outline-none  focus:ring-purple-500">Transfer Now</button>
)}           </div>
        </div>
      </main>
      
      <Footer/>
    </div>
    </>
  );
};

export default Features;
