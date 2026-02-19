 import { createSlice } from "@reduxjs/toolkit";

 
 
 const savedIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
 
 const initialState = {
    incomes : savedIncomes
 }
 
 const incomeSlice = createSlice({
    name : "income",
    initialState,
    reducers : {
        addIncome : (state , action) => {
            const Incomes ={
                ...action.payload
            }
            state.incomes.push(Incomes)
        },

        deleteIncome : (state , action) => {
            const id = action.payload;
            state.incomes = state.incomes.filter(income => income.id !== id)
         },

        // updateIncome : (state , action) => {
        //     const { id, updatedData } = action.payload;
        //     const index = state.incomes.findIndex(income => income.id === id);
        //     if (index !== -1) {
        //         state.incomes[index] = { ...state.incomes[index], ...updatedData };
        //     }
        //  }
           updateExpense: (state, action) => {
      const updatedData = action.payload;

      state.expenses = state.expenses.map((item) =>
        item.id === updatedData.id ? updatedData : item
      );

      localStorage.setItem("expenses", JSON.stringify(state.expenses));
    }
  
       
    }})

    export const { addIncome, deleteIncome, updateIncome } = incomeSlice.actions;
    export default incomeSlice.reducer;