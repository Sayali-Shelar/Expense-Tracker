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

        editIncome : (state , action) => {
            
            const index = state.incomes.findIndex(income => income.id === action.payload.id);
            if (index !== -1) {
                state.incomes[index] = action.payload;
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

    export const { addIncome, deleteIncome, editIncome } = incomeSlice.actions;
    export default incomeSlice.reducer;