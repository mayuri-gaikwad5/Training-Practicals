import React, { Component } from "react";
import User from "./React_conditional/user.jsx";
import Guest from "./React_conditional/guest.jsx";

// export default class App extends Component {
//   render() {
//     const isRegistered = this.props.consumer;
//     if (isRegistered) {
//       return <User />;
//     }
//     return <Guest />;
//   }
// }


export default class App extends Component {
  state = {
    isLoggedIn: true
  }

  clickLogin = () => {
    this.setState({ isLoggedIn: true })
  }
  clickLogout = () => {
    this.setState({ isLoggedIn: false })
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // let consumer;
    // if (isLoggedIn) {
    //   consumer= <User  clickData={this.clickLogout} />;
    // }
    // else {
    //   consumer =<Guest clickData={this.clickLogin} />;
    // }
    // return <div>{consumer}</div>;


    // using ternary operator 
    //     return(
    //       <div>
    //         {isLoggedIn ? (
    //           <User clickData={this.clickLogout} />
    //         ) : (
    //           <Guest clickData={this.clickLogin} />
    //         )}
    //       </div>
    //     );
    //   }
    // }


    //using IIFE
    return (
      <div>
        {
          (
          () => {
            if (isLoggedIn) {
              return <User clickData={this.clickLogout} />
            }
            else {
              return <Guest clickData={this.clickLogin} />
            }
          }
        )()
        }
      </div>
    );
  }
}
