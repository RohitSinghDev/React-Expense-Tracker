import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  // const [yearValue, setYearValue] = useState(2021);
  const [yearValue, setYearValue] = useState("2021");

  const changeYear = (yValue) => {
    setYearValue(yValue);
  };

  const expense_item_f = (ex_item) => {
    let year = ex_item.date.toLocaleDateString().split("/");

    if (year[year.length - 1] == yearValue) {
      return (
        <ExpenseItem
          key={ex_item.id}
          title={ex_item.title}
          amount={ex_item.amount}
          date={ex_item.date}
        />
      );
    }
  };

  let filtertedExpenses = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === yearValue;
  });
  // let expenseContent = <p>no expenses to show</p>;
  // if (props.items.length > 0) {
  //   expenseContent = props.items.map((expense_item) => (
  //     <ExpenseItem
  //       key={expense_item.id}
  //       title={expense_item.title}
  //       amount={expense_item.amount}
  //       date={expense_item.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeYear={changeYear} newYear={yearValue} />

        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}

        {/* {props.items.map((expense_item) => expense_item_f(expense_item))} */}

        {/* {props.items.map((expense_item) => (
          <ExpenseItem
            key={expense_item.id}
            title={expense_item.title}
            amount={expense_item.amount}
            date={expense_item.date}
          />
        ))} */}
        {/* {filtertedExpenses.length === 0 ? (
          <p>no expenses to show</p>
        ) : (
          filtertedExpenses.map((expense_item) => (
            <ExpenseItem
              key={expense_item.id}
              title={expense_item.title}
              amount={expense_item.amount}
              date={expense_item.date}
            />
          ))
        )} */}

        {/* {filtertedExpenses.length === 0 && <p>no expenses to display</p>}
        {filtertedExpenses.length > 0 &&
          filtertedExpenses.map((expense_item) => (
            <ExpenseItem
              key={expense_item.id}
              title={expense_item.title}
              amount={expense_item.amount}
              date={expense_item.date}
            />
          ))} */}

        <ExpensesChart expenses={filtertedExpenses} />

        <ExpensesList items={filtertedExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
