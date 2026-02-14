import React, { useState } from "react";
import Sidebar from "./Sidebar";





  const COLORS = ["#4CAF50", "#F44336"];

  const OverviewDashboard = () => {

  return (
    <div>
     
      {/* Header Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-3 md:mb-0">
          Dashboard Overview
        </h1>

        <div className="flex gap-3">
          
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Add Income
          </button>
         
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Add Expense
          </button>
        </div>
      </div>

      

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Total Income</h3>
          <p className="text-2xl font-bold mt-2 text-green-500">₹50,000</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Total Expense</h3>
          <p className="text-2xl font-bold mt-2 text-red-500">₹25,000</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Balance</h3>
          <p className="text-2xl font-bold mt-2 text-blue-500">₹25,000</p>
        </div>
      </div>

     
        
        </div>
      
  );
}


export default OverviewDashboard;
