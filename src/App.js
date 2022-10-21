import React from "react";
import DepositForm from "./Components/DepositForm";
import WithdrawForm from "./Components/WithdrawForm";
import Modal from "./Components/Modal";
import "./Styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMoney: 0,
      addBalance: 0,
      addExpense: 0,
      expensesList: [],
      showModalMinus: false,
      showModalInsufficient: false,
      showModalDeclined: false,
      showModalExist: false,
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
      this.setState({ showModalDeclined: true });
      let audio = new Audio("./sus.mp3");
      audio.play();
      return;
    }
    if (amount < 0) {
      this.setState({ showModalMinus: true });
      let audio = new Audio("./vine-boom.mp3");
      let audio2 = new Audio("./movie_1.mp3");
      audio.play();
      audio2.play();
      return;
    }
    if (amount === 0) {
      this.setState({ showModalInsufficient: true });
      let audio = new Audio("./vine-boom.mp3");
      let audio2 = new Audio("./movie_1.mp3");
      let audio3 = new Audio("./aughhhh-tiktok.mp3");
      audio.play();
      audio2.play();
      audio3.play();
      return;
    }
    for (const item of this.state.expensesList) {
      if (item.name === name) {
        this.setState({ showModalExist: true });
        let audio = new Audio("./sus.mp3");
        let audio2 = new Audio("./vine-boom.mp3");
        audio.play();
        audio2.play();
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

  hideModal = () => {
    this.setState({ showModalMinus: false });
    this.setState({ showModalInsufficient: false });
    this.setState({ showModalDeclined: false });
    this.setState({ showModalExist: false });
  };

  renderMyItems = () => {
    return this.state.expensesList.map((value, index) => {
      return (
        <div className="my-list" key={index}>
          <ul>
            <p>Item name: {value.name}</p>
            <p>Amount: {value.amount}</p>
          </ul>

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
      <div className="container">
        {" "}
        <DepositForm addBudgetAndBalance={this.addBudgetAndBalance} />
        <WithdrawForm addExpenses={this.addExpenses} />
        <div>
          <h1>Budget: {this.state.addMoney} €</h1>
          <h1>Expenses: {this.state.addExpense} €</h1>
          <h1>Balance: {this.state.addBalance} €</h1>
        </div>
        {this.renderMyItems()}
        {this.state.showModalMinus && (
          <Modal
            btnText="I'm sorry Mr. Rock"
            imgUrl="https://media.tenor.com/QA_IqSKoWTcAAAAC/the-rock.gif"
            hideModal={this.hideModal}
          />
        )}
        {this.state.showModalInsufficient && (
          <Modal
            titleTxt="🤨🤨🤨🤨"
            btnText="I'm sorry Mr Rock, I will get some money"
            imgUrl="https://media.tenor.com/ssA9ZQag3Z0AAAAd/dwayne-johnson.gif"
            hideModal={this.hideModal}
          />
        )}
        {this.state.showModalDeclined && (
          <Modal
            titleTxt="Nice try"
            btnText="Okay..."
            imgUrl="https://www.kibrispdr.org/data/1791/nodding-gif-1.gif"
            hideModal={this.hideModal}
          />
        )}
        {this.state.showModalExist && (
          <Modal
            titleTxt="Item already exists??"
            btnText="Sorry Mr. Rock, I will add something else..."
            imgUrl="https://media.tenor.com/XGpqtoboIiUAAAAC/the-rock-dwayne-johnson.gif"
            hideModal={this.hideModal}
          />
        )}
      </div>
    );
  }
}

export default App;
