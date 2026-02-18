 import { createSlice } from "@reduxjs/toolkit";
import { updateOptions } from "recharts/types/state/rootPropsSlice";
 
 
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
            state.incomes = state.incomes.filter(income => income.id !== action.payload)
         },

        updateIncome : (state , action) => {
            const { id, updatedData } = action.payload;
            const index = state.incomes.findIndex(income => income.id === id);
            if (index !== -1) {
                state.incomes[index] = { ...state.incomes[index], ...updatedData };
            }
         }
        
       
    }})

    export const { addIncome, deleteIncome, updateIncome } = incomeSlice.actions;
    export default incomeSlice.reducer;