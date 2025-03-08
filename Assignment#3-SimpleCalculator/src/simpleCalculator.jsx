import { useState } from 'react'
import './simpleCalculator.css'

const MainPage = () => {

  const[Result, setResult] = useState(0);
  const[input, setInput] = useState('');

  return (
    <>
      <div className='container'>
        <div>
          <div>
            <h1>Simple Calculator</h1>
            <h2>Result: {Result}</h2>
          </div>
          
          <div>
            <input type = 'number'
            value={input}
            onChange={(values) => {
              setInput(Number(values.target.value));
            }}
            />
          </div>

          <div>
            <div className = 'button-group'>
              <button onClick = {() => setResult((value) => value + input)}>Add</button>
              <button onClick = {() => setResult((value) => value - input)}>Subtract</button>
              <button onClick = {() => setResult((value) => value * input)}>Multiply</button>
              <button onClick = {() => setResult((value) => value / input)}>Devide</button>
            </div>

            <div className='under-botton-group'>
              <button id = 'reset' onClick = {() => setInput((value) => value = '')}>Reset Input</button>
              <button id = 'reset' onClick = {() => setResult((value) => value = 0)}>Reset Result</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage;