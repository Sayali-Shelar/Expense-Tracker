import { configureStore } from "@reduxjs/toolkit";
import IncomeReducer from "../Reducer/IncomeSlice";

 
const store = configureStore({
    reducer :{
        income : IncomeReducer,

    }

})


store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(
    "incomes",
    JSON.stringify(state.income.incomes)
  );
});


export default store;