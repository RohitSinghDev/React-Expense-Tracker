import React from "react";
import { useState } from "react/cjs/react.development";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const [newExpense, setnewExpense] = useState(expenses);

  const changeExpenses = (exp) => {
    setnewExpense((prevExpense) => {
      return [exp, ...prevExpense];
    });
    //currently, when a new element is added, a new div element is added in the end instead in the beginning and then all the content of all the elemnts are updated
    //this is not desirable performance wise and can lead to bugs
    //this behaviour is shown by react because all the elemts looks simislar to react
    // the above things happen when we pass data as props in child components without passing keys
  };

  return (
    <div>
      <NewExpense changeExpense={changeExpenses} />
      <Expenses items={newExpense} />
    </div>
  );
};

export default App;
