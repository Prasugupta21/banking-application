import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header';

import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [account,setAccount]=useState();
  const [transactions, setTransactions] = useState([]);
  const { currUser } = useSelector((state) => state.user);
  const userId = currUser?.user?._id;
  const navigate=useNavigate();

  useEffect(() => {
    if(!currUser)navigate('/login');
    userInfo();
    fetchTransactions();
  }, []);

  const userInfo = async () => {
    try {
      const { data } = await axios.get(`/user/${userId}`);
      if (data.success) {
        setBalance(data.user.balance);
        setAccount(data.user.accountNumber);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Fetch balance error:', error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const { data } = await axios.get('/transaction/history', {});
      if (data.success) {
        setTransactions(data.transactions);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Fetch transactions error:', error);
    }
  };

  const handleLogout = () => {
    // Logout logic here
  };

  return (
    
      <>
        <Header />
        <div className="mx-auto p-4 pt-6 container overflow-x-hidden ">
          <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r text-white">Dashboard</h1>
          <div className="bg-white shadow-md rounded p-4 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-center  bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">User Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded shadow-sm hover:bg-gray-100">
              <div className="font-bold mb-1">Name:</div>
              <div>{currUser?.user?.name}</div>
            </div>
            <div className="p-4 border rounded shadow-sm hover:bg-gray-200">
              <div className="font-bold mb-1">Email:</div>
              <div>{currUser?.user?.email}</div>
            </div>
            <div className="p-4 border rounded shadow-sm hover:bg-gray-200">
              <div className="font-bold mb-1">Account Number:</div>
              <div>{account}</div>
            </div>
            <div className="p-4 border rounded shadow-sm hover:bg-gray-200">
              <div className="font-bold mb-1">Balance:</div>
              <div>Rs. {balance}</div>
            </div>
          </div>
        </div>
          
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Transaction History</h2>
          <div className="overflow-x-hidden">
          <table className="min-w-full  bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Transaction ID</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Sender</th>
                <th className="py-2 px-4 border-b">Receiver</th>
          
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b align-top">{transaction._id}</td>
                  <td className="py-2 px-4 border-b align-top">{transaction.type}</td>
                  <td className="py-2 px-4 border-b align-top">{transaction.amount}</td>
                  <td className="py-2 px-4 border-b align-top">{transaction.fromUser}</td>
                  <td className="py-2 px-4 border-b align-top">{transaction.toUser}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </>
  );
};

export default Dashboard;
