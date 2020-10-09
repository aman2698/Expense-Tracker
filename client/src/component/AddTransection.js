import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/Globalstate";

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from "reactstrap";

export const AddTransaction = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      title,
      amount: +amount,
      note,
      date
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount(0);
    setNote("");
    setDate("");
  };

  return (
    <BTForm style={{ margin: 10 }} onSubmit={onSubmit}>
      <FormGroup className="row">
        <Col sm={4}>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Col sm={4}>
          <Input
            type="number"
            name="amount"
            id="expenseAmount"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Col sm={4}>
          <Input
            type="text"
            name="note"
            id="note"
            placeholder="Note"
            value={note}
            onChange={e => setNote(e.target.value)}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm={4}>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </Col>
      </FormGroup>

      <Button type="submit" color="primary">
        ADD EXPENSE
      </Button>
    </BTForm>
  );
};
