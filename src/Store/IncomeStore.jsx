import { configureStore } from "@reduxjs/toolkit";
import IncomeReducer from "../Reducer/IncomeSlice";

 
const loadstate = () => {
    try {
        const serializedState = localStorage.getItem("incomes");  
        if(serializedState === null)return undefined;

        return {income : {incomes : JSON.parse(serializedState)}}
    } catch (error) {
        console.error("Error loading state from localStorage:", error);
        return undefined;
    }
  }

  const savestate = (state) => {
    try {
        const serializedState = JSON.stringify(state.income.incomes);
        localStorage.setItem("incomes", serializedState);
    } catch (error) {
        console.error("Error saving state to localStorage:", error);
    }
  }

const store = configureStore({
    reducer :{
        income : IncomeReducer,

    }

})


store.subscribe(() => {
 savestate(store.getState());
})


export default store;