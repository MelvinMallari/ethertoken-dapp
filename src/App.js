import React from 'react';
import Web3 from 'web3';
import './App.css';
import AccountsIndex from './components/AccountsIndex';
import DepositForm from './components/DepositForm';
import WithdrawForm from './components/WithdrawForm';
import TransferForm from './components/TransferForm';
import Header from './components/Header';
import {ETHERTOKEN_ABI, ETHERTOKEN_ADDRESS} from './config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balances: [],
      accounts: [], 
      contract: null,
      totalSupply: 0
    }
  }

  componentDidMount = () => {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3("http://localhost:7545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ accounts });
    const contract = new web3.eth.Contract(ETHERTOKEN_ABI, ETHERTOKEN_ADDRESS);
    this.setState({ contract });
    contract.methods.deposit().send({from: accounts[0], value:100});
    // contract.methods.transfer(accounts[1], 10).send({from: accounts[0]});
    this.loadAccountBalances();
  }

  async loadAccountBalances() {
    const balances = [];
    const { contract, accounts } = this.state;
    for (let i = 0; i < this.state.accounts.length; i++) {
      const balance = await contract.methods.balanceOf(accounts[i]).call();
      balances.push({account: accounts[i], balance: balance});
    }
    const totalSupply = await contract.methods.totalSupply().call();
    this.setState({ totalSupply: parseInt(totalSupply, 16) });
    this.setState({ balances });
  }

  deposit = (amount) => {
    const { contract, accounts } = this.state;
    contract.methods.deposit().send({from: accounts[0], value: amount}, () => {
      this.loadAccountBalances();
    });
  }

  transfer = (account, amount) => {
    const { contract, accounts } = this.state;
    contract.methods.transfer(account, amount).send({from: accounts[0]}, () => {
      this.loadAccountBalances();
    });
  }

  withdraw = (amount) => {
    const { contract, accounts } = this.state;
    contract.methods.withdraw(amount).send({from: accounts[0]}, () => {
      this.loadAccountBalances();
    });
  }

  render() {
    const { accounts, totalSupply, balances } = this.state;
    return (
      <div className="App">
        <Header 
          account={accounts[0]}
          totalSupply={totalSupply} />
        <AccountsIndex balances={balances} />
        <DepositForm deposit={this.deposit} />
        <WithdrawForm withdraw={this.withdraw} />
        <TransferForm transfer={this.transfer} />
      </div>
    );
  }
}

export default App;
