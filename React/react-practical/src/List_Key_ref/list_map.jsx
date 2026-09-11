import React, { Component } from "react";

export default class App extends Component {
  render() {
    const arr = this.props.numbers;
    // const newArr = arr.map((num) =>
    //    {
    //     return <li>{num * 2}</li>;
    //    });
    //    console.log("oldArr= ", arr);
    return (
      <ul>
        {arr.map((num) => {
          return <li>{num * 2}</li>;
        })  }
      </ul>
    )
  }
}


//the below code is for main.jsx file
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// const arrvalues = [10,20,30,40,50];
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App consumer={false} /> */}
    
//     <App  numbers={arrvalues}/>
//   </StrictMode>,
// )

