import React, { Component } from 'react'

export class WithdrawForm extends Component {
  state = { 
    amount: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.withdraw(this.state.amount);
    this.setState({amount: ''});
  }

  update = (field) => {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Withdraw Form</p>
          <label>
            Amount:
            <input 
            type="number"
            placeholder="0"
            value={this.state.amount}
            onChange={this.update('amount')}
            />
            <input type="submit" value="Withdraw"/>
          </label>
        </form>
      </div>
    )
  }
}

export default WithdrawForm
