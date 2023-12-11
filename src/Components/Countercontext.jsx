import {useState, createContext, Children} from 'react'
export const counterNew= createContext();
export const Counter = ({children}) => {
    const[count, setCount]= useState(0)
    const Increment=()=>{
        if(count<9){
            setCount((prev)=>prev+1)
        }
    }
    const Decrement=()=>{
        if(count>0){
            setCount((prev)=>prev-1)
        }
    } 
    const value={count, Increment, Decrement}
  return (
    <div>
        <counterNew.Provider value={value}>
            {children}
        </counterNew.Provider>
    </div>
  )
}