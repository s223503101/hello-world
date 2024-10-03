import React from 'react';

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.text} <span>${transaction.amount}</span>
            <button onClick={() => deleteTransaction(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
