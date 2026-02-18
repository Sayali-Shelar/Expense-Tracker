import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaMoneyBillWave, FaGift, FaBriefcase, FaTrash, FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";







const IncomeDashboard = () => {
 const incomes = useSelector((state) => state.income.incomes);
  const getCategoryIcon = (category) => {
    switch (category) {
      case "salary":
        return <FaBriefcase className="text-blue-500" />;
      case "business":
        return <FaMoneyBillWave className="text-green-500" />;
      case "gift":
        return <FaGift className="text-pink-500" />;
      default:
        return <FaMoneyBillWave className="text-gray-500" />;
    }
  };
  const dispatch = useDispatch();

  


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
            ₹{incomes.reduce((sum, income) => sum + income.amount, 0)}          </p>
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

      

     


      {/* <div>
        {incomes.length === 0 ? (
        <p>No income added</p>
      ) : (
        incomes.map((item, index) => (
          <div key={index}>
            <p>Source: {item.source}</p>
            <p>Amount: ₹{item.amount}</p>
            <hr />
          </div>
        ))
      )}

      </div> */}
       

      <div className="bg-white shadow-lg rounded-xl p-6">
        <div className="text-end">
          Total: {incomes.length}
          </div>
        
        {incomes.length === 0 ? (
          <p className="text-gray-500 text-center">No income added</p>
        ) : (
          incomes.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              {/* Left Side */}
              <div className="flex items-center gap-4">
                <div className="text-2xl">
                  {getCategoryIcon(item.category)}
                </div>

                <div>
                  <p className="font-semibold">{item.category}</p>
                  <p className="text-gray-500 text-sm">
                    Source: {item.source}
                  </p>
                </div>
              </div>

              {/* Middle */}
              <div>
                <p className="font-bold text-green-600">
                  ₹{item.amount}
                </p>
              </div>

              {/* Right Side Buttons */}
              <div className="flex gap-3">
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>

                <button
                  onClick={() => dispatch(deleteIncome(item.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default IncomeDashboard;
