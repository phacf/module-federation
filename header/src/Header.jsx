import React from 'react';
import useStore from 'Store/store'
import "./index.css";


export default () =>{
    const {count, clear} = useStore()
    return <header className='header'>
        <h3> header</h3>
        <div>count{count}</div>
        <button onClick={clear}> clear</button>
    </header>
}