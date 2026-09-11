

import React, { Component } from "react";
import User from "./List_Key_ref/user.jsx";
export default class App extends Component {
  render() {
    const arr =this.props.number;
    const newArr = arr.map((num)=>{
      return <User key={num} value={num} />
    }); 
    return (
        <div>
          {newArr}
        </div>
    )
  } 
}