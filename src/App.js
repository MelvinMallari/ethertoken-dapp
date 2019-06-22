import React from 'react';
import Web3 from 'web3';
import './App.css';
import AccountsIndex from './components/AccountsIndex';
import {ETHERTOKEN_ABI, ETHERTOKEN_ADDRESS} from './config';

class App extends React.Component {
  state = {
    balances: [],
    accounts: [], 
    contract: null
  }

  componentDidMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3("http://localhost:7545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ accounts });
    const contract = new web3.eth.Contract(ETHERTOKEN_ABI, ETHERTOKEN_ADDRESS);
    this.setState({ contract });
    contract.methods.deposit().send({from: accounts[0], value:10000});
    contract.methods.transfer(accounts[1], 10).send({from: accounts[0]});
    const total = await contract.methods.totalSupply().call();
    this.loadAccountBalances();
  }

  async loadAccountBalances() {
    const balances = [];
    const { contract, accounts } = this.state;
    for (let i = 0; i < this.state.accounts.length; i++) {
      const balance = await contract.methods.balanceOf(accounts[i]).call();
      balances.push({account: accounts[i], balance: balance});
    }

    this.setState({ balances});
  }

  render() {
    return (
      <div className="App">
        <AccountsIndex accounts={this.state.balances} />
      </div>
    );
  }
}

export default App;
