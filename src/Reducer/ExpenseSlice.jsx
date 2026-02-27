 import { createSlice } from "@reduxjs/toolkit";

 
 
 const savedExpense = JSON.parse(localStorage.getItem("expenses")) || [];
 
 const initialState = {
    expenses : savedExpense
 }
 
 const ExpenseSlice = createSlice({
    name : "expense",
    initialState,
    reducers : {
        addExpense : (state , action) => {
            const expense ={
                ...action.payload
            }
            state.expenses.push(expense)
        },

        deleteExpense : (state , action) => {
            const id = action.payload;
            state.expenses = state.expenses.filter(expense => expense.id !== id)
         },

        editExpense : (state , action) => {
            
            const index = state.expenses.findIndex(expense => expense.id === action.payload.id);
            if (index !== -1) {
                state.expenses[index] = action.payload;
            }
         }
    //        updateExpense: (state, action) => {
    //   const updatedData = action.payload;

    //   state.expenses = state.expenses.map((item) =>
    //     item.id === updatedData.id ? updatedData : item
    //   );

    //   localStorage.setItem("expenses", JSON.stringify(state.expenses));
    }
  
       
    })

    export const { addExpense, deleteExpense, editExpense } = ExpenseSlice.actions;
    export default ExpenseSlice.reducer;