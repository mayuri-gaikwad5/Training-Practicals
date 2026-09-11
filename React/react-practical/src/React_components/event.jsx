import React ,{Component} from  "react";
class Student extends Component{
    //binding the function in constructor
    constructor(props){
        super(props);
        this.state={
            name:"Mayuri",
            roll:this.props.roll
        };
        //this.handleClick=this.handleClick.bind(this);
        //if we use arrow function then we don't need to bind the function in constructor
    }
    handleClick=()=>{
        console.log("Button Clicked",this);
    }
    render(){
        return(
            <div>
                <h1>Hello , {this.state.name} your roll number is {this.state.roll}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }

}
export default Student;


//run the below code in app.jsx file
// import Student from "./React_components/event.jsx";

// function App() {
//   return (
//     <div>
//       <Student roll="101" />
//     </div>
//   );
// }

// export default App;