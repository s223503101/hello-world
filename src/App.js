import React, { useState } from 'react';
import Header from './Header';
import Balance from './Balance';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Calculate balance
  const balance = transactions.reduce((acc, item) => acc + item.amount, 0);

  // Add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Balance balance={balance} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;
