import { configureStore } from '@reduxjs/toolkit'; //importing configureStore from redux toolkit
import expensesReducer from "./slices/expensesSlice";

const store = configureStore({
    reducer: {
        expenses: expensesReducer,
    },
});

export default store;