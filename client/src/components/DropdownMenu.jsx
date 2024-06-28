// DropdownMenu.jsx
import axios from 'axios';
import React, { useState } from 'react';
import Avatar from 'react-avatar';
import avatar from '../assets/avatar.webp'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { signoutSuccess } from '../redux/slices/userSlice';
const DropdownMenu = ({ currUser }) => {
  const [open, setOpen] = useState(false);
const dispatch=useDispatch();
const navigate=useNavigate();
  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleLogOut=async()=>{
    try {
     const data= await axios.post('/logout');
   if(data.status===200){
   
  
   dispatch(signoutSuccess());
   navigate('/');
   
   }
   else{
    alert("Something went Wrong");

     console.log('not success ')
   }
    } catch (error) {
      alert("Something went Wrong");

     console.log(error);
    }
   
   
     }
   
  return (
    <div className="relative inline-block ">
      <Avatar
        onClick={toggleDropdown}
        className="cursor-pointer md:mr-8 mr-4"
        round={true}
        src={avatar}
        size="40"
      />
      {open && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-2">
            <p className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">{currUser?.user?.name}</p>
            
              <Link to={`/dashboard`}>
              <button className="block text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">

               Profile
               </button></Link>
       
            <button
              
             onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
