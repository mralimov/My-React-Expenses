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
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onFilterredYear={choosenYearHandler} />
        {props.data.map(expense => (
          <ExpenseItem
            key={props.id}
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
