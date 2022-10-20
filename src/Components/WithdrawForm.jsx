import React from "react";
import "../Styles/WithdrawForm.css";
class WithdrawForm extends React.Component {
  //parseint
  constructor() {
    super();
    this.state = {
      expenseName: "",
      withdrawMoney: 0,
    };
  }
  submitInput = (e) => {
    e.preventDefault();
    this.props.addExpenses(this.state.expenseName, this.state.withdrawMoney);
  };
  getWithdrawName = (e) => {
    this.setState({ expenseName: e.target.value });
  };
  getWithdrawInput = (e) => {
    this.setState({ withdrawMoney: +e.target.value });
  };

  render() {
    return (
      <div>
        {/* <h1>{this.state.expenseName}</h1> */}
        {/* <h1>{this.state.withdrawMoney} €</h1> */}
        <form
          onSubmit={(event) => this.submitInput(event)}
          className="withdraw-form"
        >
          <h2>Withdraw</h2>
          <input
            onChange={this.getWithdrawName}
            type="text"
            required
            placeholder="Expense name"
          />
          <input
            onChange={this.getWithdrawInput}
            type="number"
            placeholder="Amount to withdraw"
          />
          <button className="withdraw-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default WithdrawForm;
