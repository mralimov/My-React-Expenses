import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
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

  let expenseContent = <p>No expenses found.</p>;

  if (filterYearExpenses.length > 0) {
    expenseContent = filterYearExpenses.map(expense => (
      <ExpenseItem
        key={props.id}
        id={props.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onFilterredYear={choosenYearHandler} />
        {expenseContent}
      </Card>
    </div>
  );
}
export default Expenses;
