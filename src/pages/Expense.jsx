import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { addExpense, editExpense } from "../Reducer/ExpenseSlice";
import { useNavigate, useParams } from "react-router-dom";

const Expense= () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingExpense = useSelector((state) => 
  state.expense.expenses.find((expense) => expense.id === Number(id)));
  const [formData, setFormData] = useState({
    id: existingExpense ? existingExpense.id : Date.now(),
    date: existingExpense ? existingExpense.date : "",
    title: existingExpense ? existingExpense.title : "",
    category: existingExpense ? existingExpense.category : "",
    amount: existingExpense ? existingExpense.amount : "",
    
    description: "",
  });
  useEffect(() => {
    if (existingExpense) {
      setFormData(existingExpense);
    }
  }, [existingExpense]);

  

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log("Submitting:", formData);
      if (id){
        dispatch(editExpense({
          id: Number(id),
          ...formData,
          amount: Number(formData.amount),
        }));
      } else {
        dispatch(addExpense({
          ...formData,
          amount: Number(formData.amount),
        }));
      }
      navigate("/expense-dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-red-500">
          Add Expense
        </h2>
        <div className="mb-4">

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-3"
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-3"
        />
        
      </div>
      <div>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-3"
        >
          <option value="">Select Category</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Rent</option>
          <option>Entertainment</option>
        </select>
        

        </div>
        <div>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-3"
        />

        
        </div>
        <div className="mb-4">
        <textarea
          name="description"
          placeholder="Description (Optional)"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-3"
        />
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => navigate("/expense-dashboard")}
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

export default Expense;
