import React  from 'react';

import Header from './Header';

import { useSelector } from 'react-redux';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';



const Home = () => {
const {currUser}=useSelector((state)=>state.user )

const navigate=useNavigate();
  




  return (
    <>
      <Header/>
     
      
      <div className="min-h-screen bg-gray-100 flex flex-col">
    
      
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Welcome to <span className='bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text transition-transform animate-pulse ease-linear '>Smart Cash</span> </h2>
        <h4 className="text-xl sm:text-lg  mb-8">Manage your finances effortlessly with our intuitive banking application.</h4>

        {currUser? 
      
        <button onClick={()=>navigate('/features')} className="bg-gradient-to-r from-[#090909] to-[#420842]  text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Let's Explore
        
        </button>
      :(        <button onClick={()=>navigate('/signup')} className="bg-gradient-to-r from-[#090909] to-[#420842]  text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Get Started</button>
      )}
      </main>
      
      <Footer/>
    </div>
   </>
  );
};


    
    
 
  

export default Home