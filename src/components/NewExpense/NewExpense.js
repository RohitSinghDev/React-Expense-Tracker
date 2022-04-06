import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const changeExpenseData = (data) => {
    const new_data = {
      ...data,
      id: Math.random().toString(),
      amount: parseFloat(data["amount"]),
    };
    props.changeExpense(new_data);
  };
  return (
    <div className="new-expense">
      <ExpenseForm addExpense={changeExpenseData} />
    </div>
  );
};

export default NewExpense;
