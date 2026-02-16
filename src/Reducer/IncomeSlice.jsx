 import { createSlice } from "@reduxjs/toolkit";
 
 const initialState = {
    incomes : []
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
        }
       
    }})

    export const { addIncome } = incomeSlice.actions;
    export default incomeSlice.reducer;