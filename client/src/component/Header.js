import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";

export const Header = () => {
  const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
      <div>
        <h4>Your Balance</h4>
        <h1>Rs {total}</h1>
      </div>
    );
  };
  return (
    <div className="row">
      <p className="col-9">
        <h2>Expense Tracker</h2>
      </p>
      <p className="col-3 ml-0">
        <Balance />
      </p>
    </div>
  );
};
