import { useState } from 'react'
import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
import First from './First'
import Second from './Second'
import './mystyle.css'
import Header from './header'
import MyRoutes from './MyRoutes'
import { MyContextProvider } from './Components/MyContext'
import { combineReducers, createStore } from 'redux'
import counterReducer from './Components/redux/CounterReducer'
import { Provider } from 'react-redux'
import { gameReducer } from './Components/redux/GameReducer'

function App() {
  // const [count, setCount] = useState(0)
  let mystore = createStore(gameReducer)
  
  let rootReducer = combineReducers({
    counterStore: counterReducer,
    gameStore: gameReducer
  })

  return (
    <>
    <Provider store={mystore}>
    <MyContextProvider>
      <MyRoutes />
    </MyContextProvider>
    </Provider>
    </>
  )
}

export default App
