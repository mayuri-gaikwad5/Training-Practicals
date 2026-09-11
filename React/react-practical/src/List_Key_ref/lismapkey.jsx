import React,{ Component } from "react";

export default class App extends Component{ 
  state={
    users:[
      {id:1,name:"John",age:20},
      {id:2,name:"Doe",age:30},
      {id:3,name:"Smith",age:40},
    ],
    isLoggedIn:true
  }
  render(){
    const newUsers = this.state.users.map((user)=>{
      console.log(user);
      return (
      <h1 key={user.id}>ID:{user.id} Name:{user.name} Age:{user.age}</h1>
      );
    });
    return(
    <div>
      {/* <h1>ID:{this.state.users[0].id} Name:{this.state.users[0].name} Age:{this.state.users[0].age}</h1>
      <h1>ID:{this.state.users[1].id} Name:{this.state.users[1].name} Age:{this.state.users[1].age}</h1>
      <h1>ID:{this.state.users[2].id} Name:{this.state.users[2].name} Age:{this.state.users[2].age}</h1> */}
      {newUsers}

    </div>
    );
  }
}