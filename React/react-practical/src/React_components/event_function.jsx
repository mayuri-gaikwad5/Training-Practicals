import React from "react";
//function component

function Student(props){
    // const handleClick = () => {
    //     console.log("Button Clicked");
    // };
    function handleClick(e) {
        e.preventDefault();
        console.log("Button Clicked");
    }
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <a href="https://www.google.com" onClick={handleClick}>Click Me</a>
        </div>
    )
}
export default Student;