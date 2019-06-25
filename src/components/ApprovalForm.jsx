import React, { Component } from 'react'

export class ApprovalForm extends Component {
  state = {
    account: '', 
    amount: 0
  }

  setAllowance = (e) => {
    e.preventDefault();
    this.props.approve(this.state.account, this.state.amount);
    this.setState({account: '', amount: ''});
  }

  increaseApproval = (e) => {
    e.preventDefault();
    this.props.increaseApproval(this.state.account, this.state.amount);
    this.setState({account: '', amount: ''});
  }

  decreaseApproval = (e) => {
    e.preventDefault();
    this.props.decreaseApproval(this.state.account, this.state.amount);
    this.setState({account: '', amount: ''});
  }

  update = (field) => {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  
  render() {
    return (
      <div>
        <p>Approval Form</p>
        <form >
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
            <button type="button" onClick={this.setAllowance}>Set Approval</button>
            <button type="button" onClick={this.increaseApproval}>Increase Approval</button>
            <button type="button" onClick={this.decreaseApproval}>Decrease Approval</button>
          </label>
        </form>
      </div>
    )
  }
}

export default ApprovalForm
