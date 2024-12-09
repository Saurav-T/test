import React from 'react'

const Person = (props) => {

    let {name, address, phone} = props
  return (
    <div style={{
        margin: '20px',
        padding: '20px',
        border: '1px solid blue',
        width: '500px',
    }}>
        <h1>Name: {name}</h1>
        <h1>Address: {address}</h1>
        <h1>Phone: {phone}</h1>
    </div>
  )
}

export default Person