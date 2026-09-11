import React, {Component} from 'react';

// export default class User extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome Rahul</h1>
//                 <button>Logout</button>
//             </div>
//         );
//     }
// }

// export default class User extends Component {
//     render() {
//         return (
//             <h3>Prime Member</h3>
//         );
//     }
// }

export default class User extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome Rahul</h1>
                <button  onClick={this.props.clickData}>Logout</button>
            </React.Fragment>
        );
    }
}

//run the below code in app.jsx file to see the output of the above code


// import React, { Component } from "react";
// import User from "./List_Key_ref/user.jsx";
// export default class App extends Component {
//   render() {
//     const arr =this.props.number;
//     const newArr = arr.map((num)=>{
//       return <User key={num} value={num} />
//     }); 
//     return (
//         <div>
//           {newArr}
//         </div>
//     )
//   } 
// }

//run the below code in main.jsx file to see the output of the above code
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// const arrvalues = [10,20,30,40,50];
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App consumer={false} /> */}
    
//     <App number={arrvalues} />
//   </StrictMode>,
// )

