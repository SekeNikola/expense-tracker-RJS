import React, {useContext} from 'react'

import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amount = transactions.map(transaction => transaction.amount)
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)
  return (
    <>
      <p> Your Balance</p>
      <h3>${total}</h3> 
    </>
  )
}
