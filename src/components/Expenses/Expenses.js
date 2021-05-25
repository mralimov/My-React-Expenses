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
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onFilterredYear={choosenYearHandler} />
        {filterYearExpenses.map(expense => (
          <ExpenseItem
            key={props.id}
            id={props.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
