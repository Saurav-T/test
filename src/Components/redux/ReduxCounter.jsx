import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => { 
    let { count } = useSelector(store=>store)
    let dispatch = useDispatch()
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onclick={()=>{
           dispatch({ type: "INCREASE_COUNT"}) 
        }}>Increase Count</button>

        <button onclick={()=>{
           dispatch({ type: "DECREASE_COUNT"}) 
        }}>Decrease Count</button>

        <button onclick={()=>{
           dispatch({ type: "RESET_COUNT"}) 
        }}>Reset Count</button>
    </div>
  )
}

export default ReduxCounter