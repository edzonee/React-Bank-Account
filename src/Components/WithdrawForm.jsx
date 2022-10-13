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
  getWithdrawName = (e) => {
    this.setState({expenseName: e.target.value
});
}
getWithdrawInput = (e) => {
    this.setState({withdrawMoney: e.target.value
});
}

  render() {
    return (
      <div>
        <h1>{this.state.expenseName}</h1>
        <h1>{this.state.withdrawMoney}€</h1>
        <form className="withdraw-form">
          <h2>Withdraw</h2>
          <input onChange={this.getWithdrawName} type="text" required placeholder="Expense name" />
          <input onChange={this.getWithdrawInput} type="number" placeholder="Amount to withdraw" />
          <button className="withdraw-button" type="submit">
            Submit
          </button>
        </form>
        {console.log(this.props, 'from withdraw')}
      </div>
    );
  }
}

export default WithdrawForm;
