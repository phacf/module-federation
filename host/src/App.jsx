import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import useStore from 'Store/store'


import Header from 'Header/nav'

const App = () => {
  const {count, increment} = useStore()

  return <div className="container">
    <Header/>
    <div>name: host</div>
    <div> count {count}</div>
    <button onClick={increment}> increment</button>
  </div>
};
ReactDOM.render(<App />, document.getElementById("app"));
