import ExpenseForm from './ExpensesForm';
import './NewExpenses.css';

const NewExpenses = props => {
  const addNewExpenseHandler = newExpense => {
    const newExpenseFunc = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onNewExpense(newExpenseFunc);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={addNewExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpenses;
