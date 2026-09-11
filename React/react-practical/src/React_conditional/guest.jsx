import React, {Component} from 'react';

// export default class Guest extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome Guest</h1>
//                 <button>Login</button>
//                 <button>Sign Up</button>
//             </div>
//         );
//     }
// }
export default class Guest extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <h1>Welcome Guest</h1>
                    <button onClick={this.props.clickData}>Login</button>
                    <button>Sign Up</button>
                </React.Fragment>
            </div>
        );
    }
}
