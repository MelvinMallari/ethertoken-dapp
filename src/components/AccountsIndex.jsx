import React from 'react'
function AccountsIndex(props) {
  const { balances } = props;

  const head = () => (
    <thead>
      <tr>
        <th>Account</th>
        <th>Balance (wei)</th>
      </tr>
    </thead>
  )

  return (
    <table>
      {head()}
      <tbody>
        {
          balances.map((account, i) => {
            return (
              <tr key={i}>
                <td>{account.account}</td>
                <td>{parseInt(account.balance._hex, 16)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}


export default AccountsIndex

