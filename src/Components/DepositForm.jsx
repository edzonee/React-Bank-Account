import React from "react";
import "../Styles/DepositForm.css";

class DepositForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      depositMoney: 0,
    };
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addBudgetAndBalance(this.state.depositMoney)
  }

  getDepositInput = (e) => {
    e.preventDefault()
    this.setState({ depositMoney: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.depositMoney}€</h1>
        <form onSubmit={(e)=>this.onSubmit(e)} className="deposit-form">
          <h2>Deposit</h2>
          <input
            onChange={this.getDepositInput}
            type="number"
            placeholder="Amount to deposit"
          />
          <button className="deposit-button" type="submit">
            Submit
          </button>
        </form>
        {console.log(this.props, "from deposit")}
      </div>
    );
  }
}

export default DepositForm;
