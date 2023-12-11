import {useContext} from 'react'
import { counterNew } from './Countercontext'
import './Counter.css'

const Count = () => {
    const {count,Increment, Decrement}= useContext(counterNew)
  return (

        <div className='main'>
        <h1>Count:{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        </div>
  )
}
export default Count