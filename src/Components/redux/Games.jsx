import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Games = () => {
let { game, player } = useSelector(store => store)

    let [gameName, setGame] = useState('')
    let [playerName, setPlayer] = useState('')

    let dispatch = useDispatch()
  return (
    <>
        <h1>Game: {game} </h1>
        <input type='text' onChange={e=>setGame(e.target.value)}/>
        <button onClick={()=>{
            dispatch({type: "UPDATE_GAME", payload: gameName})
        }}>Update Game</button>

        <h1>Player: {player} </h1>
        <input type='text' onChange={e=>setPlayer(e.target.value)}/>
        <button onClick={()=>{
            dispatch({type: "UPDATE_PLAYER", payload: playerName})
        }}>Update Player</button>
    </>
  )
}

export default Games