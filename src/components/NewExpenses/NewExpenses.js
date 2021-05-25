import React, { useState } from 'react';
import ExpenseForm from './ExpensesForm';
import './NewExpenses.css';

const NewExpenses = props => {
  const [openForm, setOpenForm] = useState(false);
  const addNewExpenseHandler = newExpense => {
    const newExpenseFunc = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onNewExpense(newExpenseFunc);
    setOpenForm(false);
  };

  const openFormHandler = () => setOpenForm(true);
  const closeFormHandler = () => setOpenForm(false);
  return (
    <div className="new-expense">
      {!openForm && <button onClick={openFormHandler}>Add New Expense</button>}
      {openForm && (
        <ExpenseForm
          onSaveNewExpense={addNewExpenseHandler}
          closeForm={closeFormHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpenses;
