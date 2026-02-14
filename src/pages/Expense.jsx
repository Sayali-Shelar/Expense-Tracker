import React, { useState } from "react";

const Expense= () => {
  const [formData, setFormData] = useState({
    date: "",
    title: "",
    category: "",
    amount: "",
    
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.date) newErrors.date = "Date required";
    if (!formData.title.trim()) newErrors.title = "Title required";
    if (!formData.category) newErrors.category = "Category required";
    if (!formData.amount || formData.amount <= 0)
      newErrors.amount = "Valid amount required";
    

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      alert("Expense Added Successfully!");
      console.log(formData);
      setFormData({
        date: "",
        title: "",
        category: "",
        amount: "",
       
        description: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
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

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-3"
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-3"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

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
        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}


        

        <textarea
          name="description"
          placeholder="Description (Optional)"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-2 mb-3"
        />

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Save Expense
        </button>
      </form>
    </div>
  );
};

export default Expense;
