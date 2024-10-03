import React, { useState } from 'react';

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
