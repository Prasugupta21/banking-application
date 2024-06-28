
import React from 'react';
import Header from './Header';

import teamMember from '../assets/teamMember.jpeg'
import teamMember2 from '../assets/teamMember2.png'
import ceo from '../assets/CEO.jpeg'
import Footer from './Footer';
const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">About Us</h1>
          <p className="text-lg mb-6 text-gray-700">
            Welcome to Our Banking application, your trusted partner in financial success. We are committed to
            providing the best banking services and support to help you achieve your financial goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">Our Mission</h2>
              <p className="text-gray-700">
                Our mission is to deliver exceptional banking services to our customers while
                maintaining the highest standards of integrity, security, and customer satisfaction.
                We strive to be the leading financial institution by offering innovative products and
                personalized services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">Our Values</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Customer Focus: We prioritize our customers' needs and work tirelessly to meet them.</li>
                <li>Integrity: We uphold the highest ethical standards in all our dealings.</li>
                <li>Innovation: We continuously seek innovative solutions to enhance our services.</li>
                <li>Community: We are dedicated to making a positive impact in the communities we serve.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img src={ceo}alt="CEO" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">John Clark</h3>
              <p className="text-gray-700">CEO</p>
              <p className="text-gray-500">John leads our team with a vision for the future and a commitment to excellence.</p>
            </div>
            <div className="text-center">
              <img src={teamMember} alt="CFO" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">Jane Smith</h3>
              <p className="text-black">CFO</p>
              <p className="text-gray-500">Jane manages our financial operations with a focus on growth and stability.</p>
            </div>
            <div className="text-center">
              <img src={teamMember2}alt="COO" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[purple] to-[#420842] text-transparent bg-clip-text">James Brown</h3>
              <p className="text-gray-700">COO</p>
              <p className="text-gray-500">James ensures our daily operations run smoothly and efficiently.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
