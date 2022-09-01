import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setcount]=useState(0)

  return (
    <div>
      <center>
        <button onClick={()=>setcount(count-1)}>Decrement(-)</button>
        <button onClick={()=>setcount(0)}>Reset(0)</button>
        <button onClick={()=>setcount(count+1)}>Increment(+)</button>
      <h2>
        The button is clicked {count} times
      </h2>
      </center>
    </div>
  )
}

export default App