import React from 'react';
import Web3 from 'web3';
import './App.css';
import AccountsIndex from './components/AccountsIndex';
import DepositForm from './components/DepositForm';
import WithdrawForm from './components/WithdrawForm';
import TransferForm from './components/TransferForm';
import ApprovalForm from './components/ApprovalForm';
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

  loadBlockchainData = async () => {
    const web3 = new Web3("http://localhost:7545");
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(ETHERTOKEN_ABI, ETHERTOKEN_ADDRESS);
    this.setState({ accounts, contract });
    this.loadAccountBalances();
    this.loadTotalSupply();
    this.loadAllowances();
  }

   loadAccountBalances = async () => {
    const balances = {};
    const { contract, accounts } = this.state;
    for (let i = 0; i < this.state.accounts.length; i++) {
      const balance = await contract.methods.balanceOf(accounts[i]).call();
      balances[accounts[i]] = parseInt(balance._hex, 16);
    }
    this.setState({ balances });
  }

  loadTotalSupply = async () => {
    const totalSupply = await this.state.contract.methods.totalSupply().call();
    this.setState({ totalSupply: parseInt(totalSupply, 16) });
  }

  loadAllowances = async () => {
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
      this.loadAllowances();
    });
  }

  withdraw = (amount) => {
    const { contract, accounts } = this.state;
    contract.methods.withdraw(amount).send({from: accounts[0]}, () => {
      this.loadAccountBalances();
      this.loadTotalSupply();
    });
  }

  approve = (spender, amount) => {
    const { contract, accounts } = this.state;
    contract.methods.approve(spender, amount).send({from: accounts[0]}, () => {
      this.loadAllowances();
    });
  }

  increaseApproval = (spender, amount) => {
    const { contract, accounts } = this.state;
    contract.methods.increaseApproval(spender, amount).send({from: accounts[0]}, () => {
      this.loadAllowances();
    });
  }

  decreaseApproval = (spender, amount) => {
    const { contract, accounts } = this.state;
    contract.methods.decreaseApproval(spender, amount).send({from: accounts[0]}, () => {
      this.loadAllowances();
    });
  }

  render = () => {
    const { accounts, totalSupply, balances, allowances } = this.state;
    return (
      <div className="App">
        <Header 
          account={accounts[0]} 
          totalSupply={totalSupply} />
        <AccountsIndex 
          owner={accounts[0]}
          accounts={accounts}
          balances={balances}
          allowances={allowances} />
        <DepositForm deposit={this.deposit} />
        <WithdrawForm withdraw={this.withdraw} />
        <TransferForm transfer={this.transfer} />
        <ApprovalForm 
          approve={this.approve}
          increaseApproval={this.increaseApproval}
          decreaseApproval={this.decreaseApproval} />
      </div>
    );
  }
}

export default App;
