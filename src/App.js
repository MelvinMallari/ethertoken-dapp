import React from 'react';
import Web3 from 'web3';
import './App.css';
import AccountsIndex from './components/AccountsIndex';
import AllowancesIndex from './components/AllowancesIndex';
import DepositForm from './components/DepositForm';
import WithdrawForm from './components/WithdrawForm';
import TransferForm from './components/TransferForm';
import Header from './components/Header';
import { ETHERTOKEN_ABI, ETHERTOKEN_ADDRESS } from './config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balances: {},
      accounts: [], 
      allowances: {}, 
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
    const contract = new web3.eth.Contract(ETHERTOKEN_ABI, ETHERTOKEN_ADDRESS);
    this.setState({ accounts, contract });
    this.loadAccountBalances();
    this.loadAllowances();
  }

  async loadAccountBalances() {
    const balances = {};
    const { contract, accounts } = this.state;
    for (let i = 0; i < this.state.accounts.length; i++) {
      const balance = await contract.methods.balanceOf(accounts[i]).call();
      balances[accounts[i]] = parseInt(balance._hex, 16);
      // balances.push({account: accounts[i], balance});
    }
    this.setState({ balances });
  }

  async loadTotalSupply() {
    const { contract, accounts } = this.state;
    const totalSupply = await contract.methods.totalSupply().call();
    this.setState({ totalSupply: parseInt(totalSupply, 16) });
  }

  async loadAllowances() {
    const allowances = {};
    const { contract, accounts } = this.state;
    for (let i = 0; i < this.state.accounts.length; i++) {
      const allowance = await contract.methods.allowance(accounts[0], accounts[i]).call();
      allowances[accounts[i]] = parseInt(allowance._hex, 16);
    }
    this.setState({ allowances });
    return allowances;
  }

  deposit = (amount) => {
    const { contract, accounts } = this.state;
    contract.methods.deposit().send({from: accounts[0], value: amount}, () => {
      this.loadAccountBalances();
      this.loadTotalSupply();
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
      this.loadTotalSupply();
    });
  }

  render() {
    const { accounts, totalSupply, balances, allowances } = this.state;
    return (
      <div className="App">
        <Header 
          account={accounts[0]} 
          totalSupply={totalSupply} />
        <AccountsIndex 
          accounts={accounts}
          balances={balances}
          allowances={allowances} />
        <AllowancesIndex account={accounts[0]} accounts={accounts} />
        <DepositForm deposit={this.deposit} />
        <WithdrawForm withdraw={this.withdraw} />
        <TransferForm transfer={this.transfer} />
      </div>
    );
  }
}

export default App;
