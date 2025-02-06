import { createSlice } from '@reduxjs/toolkit';

//State management(adding and removing expenses)
const expensesSlice = createSlice({
    name: 'expenses',
    initialState: [],
    reducers: {
        addExpense: (state, action) => {
            state.push(action.payload); //adds new expense to the state array
        },
        removeExpense: (state, action) => {
            return state.filter(expense => expense.id !== action.payload.id);
        },
    },
});

export const { addExpense, removeExpense } = expensesSlice.actions;
export default expensesSlice.reducer;