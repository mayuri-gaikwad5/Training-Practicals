import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    console.log(e.target[1].value);
    e.preventDefault();

    
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <br />
          <br />

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>

          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}



//enter the below code in app.jsx to import the form component and use it in the app component
import Form from "./React_components/form.jsx";

// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

// export default App;