import React from 'react'

export class DepositForm extends React.Component {
  state = {
    amount: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.deposit(this.state.amount);
    this.setState({amount: 0});
  }

  update = (field) => {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <p>Deposit Form</p>
      <label>
        Amount:
        <input 
        type="number"
        placeholder="0"
        value={this.state.amount}
        onChange={this.update('amount')}
        />
        <input type="submit" value="Deposit"/>
      </label>
    </form>
    )
  }
}

export default DepositForm

