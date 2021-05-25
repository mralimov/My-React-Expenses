import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
import React, { useState } from 'react';
const SAMPLE_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450.09,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(SAMPLE_EXPENSES);

  const addNewExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...SAMPLE_EXPENSES];
    });
  };
  return (
    <div>
      <h2>My React Expenses Component!</h2>
      <NewExpenses onNewExpense={addNewExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
