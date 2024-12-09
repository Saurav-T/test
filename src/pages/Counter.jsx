import React, { useState , useEffect } from 'react'

const Counter = () => {

    //useState - hooks
    /*
        let/const [variable, function] = useState(initialData)
        variable = name of the variable
        function = function to update state
        initialData = initial value of the state
            0-9 : Number
            '' or "" : String
            true or false : Boolean
            [] : array
            {} : object  
    */ 
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(0)

    /* useEffect : to show some side effects when a state changes
    
        syntax:
        useEffect(effect, dependency)
        effect - side effect to be seen
        dependency - list of states that trigger the effect
        [a, b, c] : effect is seen when a, b, or c changes
        [] : effect is seen when page load only
         null, if no dependencies are passed, effect is seen on page load and when any state changes
    */

        useEffect(()=>{
            alert("value updated")}
            ,[count2, count])

    // Hooks allow us to use state and other React features without writing a class.
          return (
                    <>
                        <h1> Count : {count} </h1>
                        <button onClick={()=>{
                            setCount(++count);
                            console.log(count);
                        }}>Increase</button>
                        <button onClick={()=>{
                            setCount(--count);
                            console.log(count);
                        }}>Decrease</button>
                        <button onClick={()=>{
                            setCount(0);
                            console.log(count);
                        }}>Reset</button>


                        <h1> Count : {count2} </h1>
                        <button onClick={()=>{
                            setCount2(++count2);
                            console.log(count2);
                        }}>Increase</button>
                        <button onClick={()=>{
                            setCount2(--count2);
                            console.log(count2);
                        }}>Decrease</button>
                        <button onClick={()=>{
                            setCount2(0);
                            console.log(count2);
                        }}>Reset</button>
                    </>
                )
        
}

export default Counter