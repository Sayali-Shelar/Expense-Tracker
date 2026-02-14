import React, { useState } from "react";
import Expense from "../pages/Expense";
import { Link } from "react-router-dom";

const ExpenseDashboard = () => {


  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-red-500 mb-3 md:mb-0">
          Expense Dashboard
        </h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          <Link to="/expense">
          Add Expense
          </Link>
        </button>
      </div>


      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Total Expense</h3>
          <p className="text-2xl font-bold mt-2 text-red-500">₹25,000</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">This Month</h3>
          <p className="text-2xl font-bold mt-2 text-red-500">₹10,000</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Last Month</h3>
          <p className="text-2xl font-bold mt-2 text-red-500">₹15,000</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDashboard;
