import React from 'react'
function AccountsIndex(props) {
  const { owner, accounts, balances, allowances } = props;

  const head = () => (
    <thead>
      <tr>
        <th>Account</th>
        <th>Balance (wei)</th>
        <th>Allowance (wei)</th>
      </tr>
    </thead>
  )

  return (
    <div className="center">
      <table>
        {head()}
        <tbody>
          {
            accounts.map((account, i) => {
              return (
                <tr key={i}>
                  <td>{account}</td>
                  <td>{balances[account]}</td>
                  <td>{account === owner ? '-' : allowances[account]}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}


export default AccountsIndex

