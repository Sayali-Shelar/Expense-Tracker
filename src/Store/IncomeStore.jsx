import { configureStore } from "@reduxjs/toolkit";
import IncomeReducer from "../Reducer/IncomeSlice";

 
const store = configureStore({
    reducer :{
        income : IncomeReducer,

    }

})

export default store;