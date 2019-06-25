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
            <div className="column">
              <label for="senderAccount"> Sender Account: </label>
              <input 
                id="senderAccount"
                type="text"
                placeholder="Account..."
                value={this.state.senderAccount}
                onChange={this.update('senderAccount')} />
            </div>

            <div className="column">
              <label for="sourceAcount"> Source Account: </label>
              <input 
                id="sourceAccount"
                type="text"
                placeholder="Account..."
                value={this.state.sourceAccount}
                onChange={this.update('sourceAccount')} />
            </div>

            <div className="column">
              <label>To Account: </label>
              <input 
                type="text"
                placeholder="Account..."
                value={this.state.toAccount}
                onChange={this.update('toAccount')} />
            </div>

            <div className="column">
              <label>Amount: </label>
              <input 
                type="number"
                placeholder="0"
                value={this.state.amount}
                onChange={this.update('amount')} />
            </div>

            <div className="button-wrapper-c">
              <button className="button" type="button" onClick={this.transferFrom}>Transfer</button>
            </div>
          </div>
        </form>
        
      </div>
    )
  }
}

export default TransferFromForm
