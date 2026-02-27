import React, { useState } from "react";
import Expense from "../pages/Expense";
import { useSelector } from "react-redux";
import { FaUtensils, FaShoppingCart, FaCar, FaShoppingBag } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteExpense , editExpense } from "../Reducer/ExpenseSlice";
import { useNavigate } from "react-router-dom";   
import { Link } from "react-router-dom";

const ExpenseDashboard = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  // const getCategoryIcon = (category) => {
  //   switch (category) {
  //     case "food":
  //       return <FaUtensils className="text-red-500" />;
  //     case "shopping":
  //       return <FaShoppingCart className="text-red-500" />;
  //     case "transportation":
  //       return <FaCar className="text-red-500" />;
  //     default:
  //       return <FaShoppingBag className="text-gray-500" />;
  //   }
  // };
  const getCategoryIcon = (category) => {
  switch (category) {
    case "Food":
      return <FaUtensils className="text-red-500" />;
    case "Transport":
      return <FaCar className="text-red-500" />;
    case "Rent":
      return <FaShoppingBag className="text-red-500" />;
    case "Entertainment":
      return <FaShoppingCart className="text-red-500" />;
    default:
      return <FaShoppingBag className="text-gray-500" />;
  }
};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (id, updatedData) => {
    dispatch(editExpense({id, ...updatedData}));
  };
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
          <p className="text-2xl font-bold mt-2 text-red-500">
            ₹{expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0)}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">This Month</h3>
          <p className="text-2xl font-bold mt-2 text-red-500">
            765
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-gray-500">Last Month</h3>
          <p className="text-2xl font-bold mt-2 text-red-500">
            86
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6">
             
      
                <div className="flex justify-between items-center 
                      border-b border-gray-300 pb-2">
      
                    <p className="text-sm font-medium text-gray-600">
                     Total Expense
                    </p>
      
                      <h3 className="text-2xl  text-emerald-600">
                        {expenses.length}
                        </h3>
      
                  </div>
                 
         
              
              {expenses.length === 0 ? (
                <p className="text-gray-500 text-center">No expense added</p>
              ) : (
                expenses.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center mt-4 p-2 bg-gray-50 rounded-lg shadow-sm"
                  >
                    {/* Left Side */}
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">
                        {getCategoryIcon(item.category)}
                      </div>
      
                      <div>
                        <p className="font-semibold">{item.category}</p>
                        <p className="text-gray-500 text-sm">
                          date: {item.date}
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
                      <button 
                       onClick={()=>navigate(`/edit-expense/${item.id}`)}
                      className="text-blue-500 hover:text-blue-700">
                       
                        <FaEdit />
                      </button>
      
                      <button
                        onClick={()=>dispatch(deleteExpense(item.id))}
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

export default ExpenseDashboard;
