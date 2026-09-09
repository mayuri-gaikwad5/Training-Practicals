import React, {Component} from 'react';
//using class and state based component
// class Student1 extends Component {
//     state={
//         name:"Rahul",
//         roll:this.props.roll
//     }
//     render(){
//         return(
//             <h1>Hello, {this.state.name} your roll number is{this.state.roll}</h1>
//         )
//     }
// }

//inside the constructor we can also define the state

// class Student1 extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             name:"Rahul",
//             roll:this.props.roll
//         }
//     }
//     render(){
//         return(
//             <h1>Hello, {this.state.name} your roll number is {this.state.roll}</h1>
//         )
//     }
// }
// export default Student1;

//run the below code in app.jsx file to see the output
// import Student1 from './React_components/studen1.jsx'// use your actual folder path

// function App() {
//   return (
//     <div>
//       <Student1 roll={100} />
//     </div>
//   )
// }

// export default App



//new concept of functional component and props

//composing components
const Student1=(props) =>{
    return <h1>Hello {props.name}</h1>;
};
export default Student1;