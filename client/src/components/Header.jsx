import { GiHamburgerMenu } from "react-icons/gi";

import { RxCross1 } from "react-icons/rx";
import {  useState } from "react";
import { useSelector } from "react-redux";


import clsx from "clsx";
import DropdownMenu from "./DropdownMenu";
import { Link, useNavigate } from "react-router-dom";




const Header = () => {
  const [st, setState] = useState(false);
  const navigate=useNavigate();
  const {currUser}=useSelector((state)=>state.user )
 


 

  return (
    <>
      <header>
        <div className="w-screen border-b-2 flex justify-between p-2 ">
          <div className="flex justify-center items-center space-x-4 lg:p-3 ">
            <GiHamburgerMenu
              id="hamburger"
              onClick={() => {
                setState(true);
              }}
              className="text-2xl lg:hidden text-white"
            />
            <Link to={'/'} className="text-xl  font-bold   bg-gradient-to-r from-[purple] to-[pink] text-transparent bg-clip-text hover:text-white transition-all duration-300 ease-in-out ">Smart Cash</Link>
            <div className="hidden lg:block">
            
              <ul className="ml-10 flex justify-around space-x-11 font-serif hover:text-black">
                
                    
<li className="text-lg text-white hover:text-purple-500 transition-all duration-300 ease-in-out ">
                     
                     <Link to={'/'}>Home</Link>
                     
                   </li>
<li className="text-lg text-white hover:text-purple-500 transition-all duration-300 ease-in-out ">
                     
                     <Link to={'/about'}>About</Link>
                     
                   </li>
<li className="text-lg text-white hover:text-purple-500 transition-all duration-300 ease-in-out ">
                     
                     <Link to={'/features'}>Features</Link>
                     
                   </li>

           
          </ul>
          
              
                    
            </div>
          </div>
          <div
            id="mobile-navbar"
            className={clsx(
              "fixed top-0 left-0 w-screen h-full bg-black/20 backdrop-blur-sm -translate-x-full",
              st && "translate-x-0" //toggle on true//
            )}
          >
            <div className="bg-white w-3/5 h-full p-7 ">
              <RxCross1
                id="Cross-icon"
                onClick={() => {
                  setState(false);
                }}
                className="text-2xl mb-5 cursor-pointer  "
              />
              {currUser ? 
               <ul className="space-y-4 font-serif">
              <li className="text-lg font-bold text-purple-600 hover:text-purple-500 transition-all duration-300 ease-in-out">
              <Link to={'/'}>Home</Link>
          
            </li>
              <li className="text-lg font-bold text-purple-600 hover:text-purple-500 transition-all duration-300 ease-in-out">
              <Link to={'/transaction/deposit'}>Deposite</Link>
          
            </li>
            <li className="text-lg font-bold text-purple-600 hover:text-purple-500 transition-all duration-300 ease-in-out">
            
              <Link to={'/transaction/transfer '}>Transfer</Link>
            
            </li>
            <li className="text-lg font-bold text-purple-600 hover:text-purple-500 transition-all duration-300 ease-in-out">
             
              <Link to={'/transaction/withdraw '}>Withdraw</Link>
              
            </li>
            <li className="text-lg font-bold text-purple-600 hover:text-purple-500 transition-all duration-300 ease-in-out">
             
              <Link to={'/about '}>About</Link>
              
            </li>
            
            </ul>
            :(
<ul className="space-y-4 font-serif">
                
                    
                <li className="text-lg font-bold text-purple-600 hover:text-purple-500 transition-all duration-300 ease-in-out">
            
                  <Link to={'/'}>Home</Link>
                </li>
                <li className="text-lg font-bold text-purple-600 hover:text-purple-500 transition-all duration-300 ease-in-out">
            
                  <Link to={'/about'}>About</Link>
                </li>
           
          </ul>
            )}
              
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 lg:space-x-10 ">
         
          
                
         {currUser ? <DropdownMenu currUser={currUser}  />:(
            <button className="bg-gradient-to-r md:mr-8 mr-4 from-[purple] to-[#f01027] rounded-full py-2 px-5 hover:bg-yellow-800" onClick={()=>navigate('/login')}>
               
              Login</button>
         )}
             
         
           
          
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;