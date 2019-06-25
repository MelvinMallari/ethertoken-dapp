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
        <div className="vertical">
          <div className="column-wrapper">
            <div className="column">
              <label className="center" for="amount"> Amount: </label>
              <input 
                className="task-input"
                id="amount"
                type="number"
                placeholder="0"
                value={this.state.amount}
                onChange={this.update('amount')} />
            </div>
          </div>
          <div className="button-wrapper-sb">
            <button className="button" onClick={this.deposit}>Deposit</button>
            <button className="button" onClick={this.withdraw}>Withdraw</button>
          </div>
        </div>
      </form>
    )
  }
}

export default TransactionForm

