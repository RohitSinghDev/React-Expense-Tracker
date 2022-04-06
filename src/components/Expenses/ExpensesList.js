import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense_item) => (
        <ExpenseItem
          key={expense_item.id}
          title={expense_item.title}
          amount={expense_item.amount}
          date={expense_item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
