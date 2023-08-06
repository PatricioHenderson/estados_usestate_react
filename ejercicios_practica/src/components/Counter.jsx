import React from 'react'
import { useState } from 'react'

function Counter() {
    let [value, setValue] = useState(0);
    
    const incrementCount = () =>{
        setValue(value +1);
        console.log(value)
    }

    const reduceCount = () =>{
        setValue(value -1);
    }

  return (
    <div>
        <h2>El valor es {value} </h2>

        <button
            onClick={
                incrementCount
        }>+</button>

        <button
            onClick={
                reduceCount
            }
            disabled={value < 1}
            >-</button>
        
    </div>
  )
}

export default Counter