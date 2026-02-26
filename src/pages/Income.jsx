import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { addIncome, editIncome } from "../Reducer/IncomeSlice";
import { useNavigate, useParams } from "react-router-dom";

const Income = () => {
  const {id} = useParams();
const dispatch = useDispatch();

const navigate = useNavigate();

const existingIncome = useSelector((state) => 
  state.income.incomes.find((income) => income.id === Number(id)));

  const [formData, setFormData] = useState({
    id: existingIncome ? existingIncome.id : Date.now(),
    
    date: existingIncome ? existingIncome.date : "",
    source: existingIncome ? existingIncome.source : "",
    category: existingIncome ? existingIncome.category : "",
    amount: existingIncome ? existingIncome.amount : "",
    description: "",
  });
  useEffect(() => {
    if (existingIncome) {
      setFormData(existingIncome);
    }
  }, [existingIncome]);

 

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log("Submitting:", formData);
      if (id){
        dispatch(editIncome({
          id: Number(id),
          ...formData,
          amount: Number(formData.amount),
        }));
      } else {
        dispatch(addIncome({
          ...formData,
          amount: Number(formData.amount),
        }));
      }
      navigate("/income-dashboard");
    }


    //  dispatch(
    //   addIncome({
    //     ...formData,
    //     amount : Number(formData.amount),


      
    //   })
    //  )

  //     dispatch(
  //   addIncome({
  //     id: Date.now(),
  //     ...formData,
  //     amount: Number(formData.amount),
  //   })
  // );

  // setFormData({
  //   date: "",
  //   source: "",
  //   category: "",
  //   amount: "",
  //   description: "",
  // });
  //  navigate("/income-dashboard");
  // }

  
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
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => navigate("/income-dashboard")}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            
        >
          {id ? "Update" : "Add "}
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default Income;
