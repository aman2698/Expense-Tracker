import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="row">
      <Card
        style={{ backgroundColor: "floralwhite", color: "#2e0678" }}
        className="col-11"
      >
        <CardBody>
          <CardTitle>
            <h6>{transaction.date}</h6>
            <h3>{transaction.title}</h3>
          </CardTitle>
          <CardText className="row">
            <p className="col-8"> {transaction.note}</p>
            <p className="col-4" style={{ fontSize: "35px" }}>
              {" "}
              Rs {transaction.amount}
            </p>
          </CardText>
        </CardBody>
      </Card>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn col-1"
        style={{
          color: "red",
          fontSize: "50px",
          backgroundColor: "#2e0678"
        }}
      >
        x
      </button>
    </div>
  );
};
