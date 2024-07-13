import React , {useState} from 'react';
//usestate implemnteed here
const Counter =()=>{
    const [count, setCount]=useState(0);
    const [incrementcnt,setIncrementcnt]=useState(0);
    const [decrementcnt, setDecrementcnt] =useState(0);
    const increment = ()=>{
        setCount(count +1);
        setIncrementcnt(incrementcnt+1);
    };
    const decrement =()=> {
        setCount(count -1);
        setDecrementcnt(decrementcnt+1);
    };



return (
    <div>

    
    <h1>count</h1>
    <h3>count value : {count}</h3>
    <button onClick={increment}>incremnt</button>
    <h3>incremnt value :{incrementcnt}</h3>
    
    <button onClick={decrement} disabled={count === 0}>decremnt </button>
    <h3>decremnt value :{decrementcnt}</h3>
    </div>
);
};
export default Counter;