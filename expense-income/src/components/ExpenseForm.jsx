import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense} from "../redux/slices/expensesSlice";

//Has form where user can add expenses
const ExpenseForm = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page from refreshing when form is submitted
        dispatch(addExpense({ id: Date.now(), name, amount: parseFloat(amount) })); //id: Date.now() is a unique id for each expense, amount: parseFloat(amount) converts amount to a number and this whole line of code dispatches the addExpense function
        setName('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Expense Name' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;