import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Withdraw = () => {
  const [amount, setAmount] = useState(0);
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        '/transaction/withdraw',
        { amount, bankName, accountNumber }
      );
      if (data.success) {
        alert('Withdraw successful.');
       
        navigate('/dashboard');
        setAmount('');
        setBankName('');
        setAccountNumber('');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went Wrong");

      console.error('Withdraw error:', error);
    }
  };

  return (
    <>
    <Header/>

    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg my-12 ">
      <h3 className="text-2xl mb-6 font-bold text-center bg-gradient-to-r from-[purple] to-[#420842] bg-clip-text text-transparent">Withdraw Money</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-gradient-to-r from-[purple] to-[#420842] text-white font-semibold tracking-wide hover:bg-green-500 focus:outline-none focus:bg-green-500"
        >
          Withdraw
        </button>
      </form>
    </div>
    <div className="mt-8 space-y-4 text-center py-10">
        <h4 className="text-lg text-white font-semibold">Other Actions You Can Perform</h4>
        <div className="flex justify-center space-x-4">
         
          <button
            onClick={() => navigate('/transaction/deposit')}
            className="px-4 py-2 rounded-md bg-pink-600 text-white font-semibold tracking-wide hover:bg-purple-500 focus:outline-none focus:bg-blue-500"
          >
            Deposit Money
          </button>
          <button
            onClick={() => navigate('/transaction/transfer')}
            className="px-4 py-2 rounded-md bg-pink-600 text-white font-semibold tracking-wide hover:bg-purple-600 focus:outline-none focus:bg-green-500"
          >
            Transfer Money
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Withdraw;
