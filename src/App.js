import React from "react";
import DepositForm from "./Components/DepositForm";
import WithdrawForm from "./Components/WithdrawForm";
import "./Styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMoney: 0,
      addBalance: 0,
      addExpense: 0,
      expensesList: [],
    };
  }

  addBudgetAndBalance = (number) => {
    this.setState({
      addMoney: this.state.addMoney + parseInt(number),
      addBalance: this.state.addBalance + parseInt(number),
    });
  };

  addExpenses = (name, amount) => {
    if (this.state.addBalance < amount) {
      alert("Declined");
      return;
    }
    if (amount < 0){
      alert('🤨🤨🤨🤨🤨')
      return;
    }
    if (amount === 0) {
      alert(`Hey you can't buy stuff for free!`);
      return;
    }
    for (const item of this.state.expensesList) {
      if (item.name === name){
        alert('Item exisististi')
        return;
      }
    }

    let myObject = {
      name: name,
      amount: amount,
    };
    this.setState({
      addExpense: this.state.addExpense + parseInt(amount),
      addBalance: this.state.addBalance - parseInt(amount),
      expensesList: [...this.state.expensesList, myObject],
    });
  };

  renderMyItems = () => {
    return this.state.expensesList.map((value, index) => {
      return (
        <div key={index}>
          <p>Item name: {value.name}</p>
          <p>Amount: {value.amount}</p>
          {console.log(value.name)}
        </div>
      );
    });
  };
  componentDidMount() {
    if (localStorage.getItem("myState")) {
      this.setState(JSON.parse(localStorage.getItem("myState")));
    }
  }
  componentDidUpdate() {
    localStorage.setItem("myState", JSON.stringify(this.state));
  }
  render() {
    return (
      <div>
        {" "}
        <DepositForm addBudgetAndBalance={this.addBudgetAndBalance} />
        <WithdrawForm addExpenses={this.addExpenses} />
        <div>
          <h1>Budget: {this.state.addMoney} €</h1>
          <h1>Expenses: {this.state.addExpense} €</h1>
          <h1>Balance: {this.state.addBalance} €</h1>
        </div>
        {this.renderMyItems()}
      </div>
    );
  }
}

export default App;