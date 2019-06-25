import React, { Component } from 'react'

export class TransferForm extends Component {
  state = {
    account: '', 
    amount: 0
  }

  transfer = (e) => {
    e.preventDefault();
    this.props.transfer(this.state.account, this.state.amount);
    this.setState({account: '', amount: ''});
  }

  update = (field) => {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <p className="center">Transfer Form</p>
        <form className="center">
          <div className="vertical">
            <div className="column">
              <label for="account"> Account: </label>
              <input 
                id="account"
                type="text"
                placeholder="Account..."
                value={this.state.account}
                onChange={this.update('account')} />
            </div>
            <div className="column">
              <label for="amount"> Amount: </label>
                <input 
                  id="amount"
                  type="number"
                  placeholder="0"
                  value={this.state.amount}
                  onChange={this.update('amount')} />
            </div>
            <div className="button-wrapper-c">
              <button className="button" onClick={this.transfer}>Transfer</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default TransferForm
