//import react from "react";
// function component
// const Student = (props) => {
//     return <h1>hello {props.name}</h1>;
// };

import React ,{Component} from "react";
// class component
class Student extends Component {
    render() {
        return (
            <div>
                <h1>hello {this.props.name}</h1>
                <h1>Roll Number: {this.props.roll}</h1>
            </div>
        )
        
    }
}

export default Student;

// write this code in app.jsx file to run the above code that is done 
// using function component
// import Student from './React_components/student.jsx'// use your actual folder path

// function App() {
//   return (
//     <div>
//       <Student name="Rahul" />
//     </div>
//   )
// }

// export default App