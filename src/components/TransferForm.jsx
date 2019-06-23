import React, { Component } from 'react'

export class TransferForm extends Component {
  state = {
    account: '', 
    amount: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.transfer(this.state.account, this.state.amount);
    this.setState({account: ''});
    this.setState({amount: ''});
  }

  update = (field) => {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <p>Transfer Form</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Account:
            <input 
            type="text"
            placeholder="0"
            value={this.state.account}
            onChange={this.update('account')}
            />
          </label>
          <label>
            Amount:
            <input 
            type="number"
            placeholder="0"
            value={this.state.amount}
            onChange={this.update('amount')}
            />
            <input type="submit"/>
          </label>
        </form>
      </div>
    )
  }
}

export default TransferForm
