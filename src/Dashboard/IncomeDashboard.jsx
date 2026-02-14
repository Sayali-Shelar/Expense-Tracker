import React, { useState } from "react";
import { Link } from "react-router-dom";

const IncomeDashboard = () => {


  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-500 mb-3 md:mb-0">
          Income Dashboard
        </h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          <Link to="/income">
          Add Income
          </Link>
        </button>
      </div>

     
     
      
      

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Total Income</h3>
          <p className="text-2xl font-bold mt-2 text-green-500">
            ₹75,000
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">This Month</h3>
          <p className="text-2xl font-bold mt-2 text-green-500">
            ₹50,000
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Last Month</h3>
          <p className="text-2xl font-bold mt-2 text-green-500">
            ₹25,000
          </p>
        </div>

      </div>
    </div>
  );
};

export default IncomeDashboard;
