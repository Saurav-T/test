import React, { useContext } from 'react'
import Person from './Person'
import { MyContext } from '../Components/MyContext'

const Display = () => {
    let msg = useContext(MyContext)
  return (
    <>
    {msg}
    <Person name='Sujal' address='Chyasal' phone='32642987'/>
    <Person name='Gujal' address='Chyasal' phone='32642987'/>
    <Person name='Pujal' address='Chyasal' phone='32642987'/>
    </>
  )
}

export default Display