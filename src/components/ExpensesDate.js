import './ExpensesDate.css';
function ExpensesDate(props) {
  const month = props.toLocalString('en-US', { month: 'long' });
  const day = props.toLocalString('en-US', { day: '2-dgit' });
  const year = this.props.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpensesDate;
