import React from 'react'

function Header(props) {
  return (
    <header>
      <p> Your account: {props.account} </p>
      <p> Total Contract Suppply (wei): {props.totalSupply} </p>
    </header>
  )
}


export default Header

