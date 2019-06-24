import React from 'react'
function AccountsIndex(props) {
  const { accounts, balances, allowances } = props;

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
    <table>
      {head()}
      <tbody>
        {
          accounts.map((account, i) => {
            return (
              <tr key={i}>
                <td>{account}</td>
                <td>{balances[account]}</td>
                <td>{allowances[account]}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}


export default AccountsIndex

