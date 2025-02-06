import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from '../redux/slices/expensesSlice';

//Displays list of expenses
const ExpenseList = () => {
    const expenses = useSelector((state) => state.expenses); //reads the list of expenses 
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        {expense.name} - KES {expense.amount}
                        <button onClick={() => dispatch(removeExpense(expense.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;