import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [year, setYear] = useState('2021');

  const choosenYearHandler = selectedYear => {
    setYear(selectedYear);
  };

  const filterYearExpenses = props.data.filter(expense => {
    if (expense.date.getFullYear().toString() === year) {
      return expense;
    }
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter selected={year} onFilterredYear={choosenYearHandler} />
        <ExpensesList transactions={filterYearExpenses} />
      </Card>
    </li>
  );
}
export default Expenses;
