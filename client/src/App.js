import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { Header } from "./component/Header";
import { AddTransaction } from "./component/AddTransection";
import { TransactionList } from "./component/List";

import { GlobalProvider } from "./context/Globalstate";

function App() {
  return (
    <GlobalProvider>
      <Container
        fluid
        style={{ backgroundColor: "#2e0678", color: "floralwhite" }}
      >
        <Jumbotron style={{ backgroundColor: "#2e0678" }}>
          <Header />
        </Jumbotron>

        <div className="row">
          <div className="col-7">
            <AddTransaction />
          </div>
          <div
            className="col-5"
            style={{ backgroundColor: "#2e0678", marginBottom: "5" }}
          >
            <TransactionList />
          </div>
        </div>
      </Container>
    </GlobalProvider>
  );
}

export default App;
