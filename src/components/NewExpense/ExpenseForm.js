import React, { Component } from "react";
import { useState } from "react";
import "./ExpenseForm.css";
import react from "react";

const ExpenseForm = (props) => {
  // the attributes of the event object are very important for various operations

  const [formBool, setFormBool] = useState(0);

  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  // since the values in the event attributes are stirngs, we set the usestate to also strings
  const dateChnageHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //initiating the value as numbers instead if strings
      date: new Date(enteredDate),
    };

    props.addExpense(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    formBool == 0 ? setFormBool(1) : setFormBool(0);
  };

  const FormBoolHnadler = () => {
    formBool == 0 ? setFormBool(1) : setFormBool(0);
  };

  if (!formBool) {
    return (
      <div>
        <button onClick={FormBoolHnadler}>add expense</button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* everytime we submit the form the page reloads and this page sends a req to the server hosting  */}
        <div className="new-expense_controls">
          <div className="new-expense_control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense_control">
            <label>Amount</label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense_control">
            <label>Date</label>
            <input
              type="date"
              min="2019-02-01"
              max="2021-03-27"
              onChange={dateChnageHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense_actions">
          <button type="submit">Add expense</button>
          <button onClick={FormBoolHnadler}>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

// const [userInput, setUserInput] = useState({
//   enteredTitle: "",
//   enteredAmount: "",
//   enteredDate: "",
// });

// const amountChangeHandler = (event) => {
//   // since the usestate replaces the value of the variable, we need to preserve the value of other variables

//   setUserInput((prevState) => {
//     return { ...prevState, enteredTitle: event.target.value };
//   });
// };
