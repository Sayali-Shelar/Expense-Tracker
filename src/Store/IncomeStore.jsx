import { configureStore } from "@reduxjs/toolkit";
import IncomeReducer from "../Reducer/IncomeSlice";
import ExpenseReducer from "../Reducer/ExpenseSlice";

 
const loadstate = () => {
    try {
        const serializedState = localStorage.getItem("incomes"); 
        const serializedExpenseState = localStorage.getItem("expenses"); 
        if(serializedState === null && serializedExpenseState === null)return undefined;

        return {
            income : {incomes : JSON.parse(serializedState) || []},
            expense : {expenses : JSON.parse(serializedExpenseState) || []}
        }
    } catch (error) {
        console.error("Error loading state from localStorage:", error);
        return undefined;
    }
  }

  const savestate = (state) => {
    try {
        const serializedState = JSON.stringify(state.income.incomes);
        localStorage.setItem("incomes", serializedState);
        const serializedExpenseState = JSON.stringify(state.expense.expenses);
        localStorage.setItem("expenses", serializedExpenseState);
    } catch (error) {
        console.error("Error saving state to localStorage:", error);
    }
  }

const store = configureStore({
    reducer :{
        income : IncomeReducer,
        expense : ExpenseReducer

    },
    preloadedState: loadstate(),
    
           
    

})


store.subscribe(() => {
 savestate(store.getState());
})


export default store;