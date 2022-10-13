import React from "react";
import DepositForm from "./Components/DepositForm";
import WithdrawForm from "./Components/WithdrawForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMoney: 0,
    };
  }
  myMethod = () => {
    console.log("hello world method");
  };

  createState = (e) =>{
    e.preventDeafult()
    this.addMoney(this.state.addMoney)
  }

  addBudgetAndBalance = (number) =>{
   console.log(number);
   this.setState({addMoney: number})
  }
  render() {
    return (
      <div>
        {" "}
        <DepositForm addBudgetAndBalance={this.addBudgetAndBalance} />
        <WithdrawForm name="omar" myMethod={this.myMethod} />
        <div>
          <h1>Budget: {this.state.addMoney}</h1>
          <h1>Expenses:{}</h1>
          <h1>Balance: {}</h1>
        </div>
      </div>
    );
  }
}

export default App;
