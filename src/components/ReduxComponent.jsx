import React from 'react'
import { useSelector } from 'react-redux'

const ReduxComponent = () => {
  const data = useSelector((state)=>console.log("state",state))
  return (
    <div>ReduxComponent</div>
  )
}

export default ReduxComponent