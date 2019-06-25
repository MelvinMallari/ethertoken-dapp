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
        <p className="center">Approval Form</p>
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

          <div className="button-wrapper-sb">
            <button className="button" type="button" onClick={this.setAllowance}>Set</button> 
            <button className="button" type="button" onClick={this.increaseApproval}>Increase</button>
            <button className="button" type="button" onClick={this.decreaseApproval}>Decrease</button>
          </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ApprovalForm
