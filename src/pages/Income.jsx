import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../Reducer/IncomeSlice";
import { useNavigate } from "react-router-dom";

const Income = () => {
const dispatch = useDispatch();

const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    source: "",
    category: "",
    amount: "",
    description: "",
  });

 

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log("Submitting:", formData);


    //  dispatch(
    //   addIncome({
    //     ...formData,
    //     amount : Number(formData.amount),


      
    //   })
    //  )

      dispatch(
    addIncome({
      id: Date.now(),
      ...formData,
      amount: Number(formData.amount),
    })
  );

  setFormData({
    date: "",
    source: "",
    category: "",
    amount: "",
    description: "",
  });
   navigate("/income-dashboard");
  }

  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
          Add Income
        </h2>

        {/* Date */}
        <div className="mb-4 ">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
          
         
        </div>

        {/* Source */}
        <div className="mb-4">
          <input
            type="text"
            name="source"
            placeholder="Income Source"
            value={formData.source}
            onChange={handleChange}
            
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
          
        </div>

        {/* Category */}
        <div className="mb-4">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Category</option>
            <option>Salary</option>
            <option>Business</option>
            <option>Investment</option>
          </select>
          
        </div>

        {/* Amount */}
        <div className="mb-4">
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
         
        </div>


        {/* Description */}
        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Description (Optional)"
            value={formData.description}
            onChange={handleChange}
            
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          
        >
          Save Income
        </button>
        
      </form>
    </div>
  );
};

export default Income;
