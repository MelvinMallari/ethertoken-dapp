import React, { Component } from 'react'

export class TransferFromForm extends Component {
  state = {
    senderAccount: '',
    sourceAccount: '',
    toAccount: '',
    amount: ''
  };

  update = (field) => {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  transferFrom = (e) => {
    e.preventDefault();
    const { senderAccount, sourceAccount, toAccount, amount } = this.state;
    this.props.transferFrom(senderAccount, sourceAccount, toAccount, amount);
    this.setState({senderAccount:'', sourceAccount:'', toAccount:'', amount:''});
  }

  render() {
    return (
      <div>
        <p className="center">TransferFrom Form</p>
        <form className="center">
          <div className="vertical">

            <label>
              Sender Account:
              <input 
              type="text"
              placeholder="0"
              value={this.state.senderAccount}
              onChange={this.update('senderAccount')} />
            </label>
            <label>
              Source Account:
              <input 
              type="text"
              placeholder="0"
              value={this.state.sourceAccount}
              onChange={this.update('sourceAccount')} />
            </label>
            <label>
              To Account:
              <input 
              type="text"
              placeholder="0"
              value={this.state.toAccount}
              onChange={this.update('toAccount')} />
            </label>
            <label>
              Amount:
              <input 
              type="number"
              placeholder="0"
              value={this.state.amount}
              onChange={this.update('amount')} />
            </label>

            <button type="button" onClick={this.transferFrom}>Transfer</button>
          </div>
        </form>
        
      </div>
    )
  }
}

export default TransferFromForm
