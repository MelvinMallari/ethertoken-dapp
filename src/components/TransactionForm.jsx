import React from 'react'

export class TransactionForm extends React.Component {
  state = {
    amount: 0
  }

  deposit = (e) => {
    e.preventDefault();
    this.props.deposit(this.state.amount);
    this.setState({amount: 0});
  }

  withdraw = (e) => {
    e.preventDefault();
    this.props.withdraw(this.state.amount);
    this.setState({amount: 0});
  }

  update = (field) => {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
    <form>
      <p className="center">Transaction Form</p>
      <label className="center">
        Amount:
        <input 
        type="number"
        placeholder="0"
        value={this.state.amount}
        onChange={this.update('amount')}
        />
        <button onClick={this.deposit}>Deposit</button>
        <button onClick={this.withdraw}>Withdraw</button>
      </label>
    </form>
    )
  }
}

export default TransactionForm

