// ----------------------------------------------------
// PRACTICAL 03: JAVASCRIPT IN JSX WITH CURLY BRACES
// ----------------------------------------------------

import imag1 from "./imag1.png";
// Creating a JavaScript object.
//
// The object stores information about a person
// and a theme for styling the component.
const person = {

  // Name property
  name: "Gregorio Y. Zara",

  // Theme is a nested object containing CSS styles.
  theme: {

    // In JSX style objects, CSS properties use camelCase.
    // background-color in CSS becomes backgroundColor.
    backgroundColor: "black",

    // Text color.
    color: "white",
    padding: "20px",
  },
};


// Creating a React component named TodoList.
function TodoList() {

  return (

    // Applying the JavaScript style object to the div.
    //
    // Curly braces {} allow us to use JavaScript
    // expressions inside JSX.
    //
    // person.theme refers to the theme object above.
    <div style={person.theme}>

      {/*
        Using JavaScript inside JSX.

        {person.name} gets the value stored in
        the name property of the person object.
      */}
      <h1>{person.name}'s Todos</h1>


      {/* Displaying an image */}
      <img
        src={imag1}
        alt="Gregorio Y. Zara"

        // Inline JavaScript style object.
        style={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
        }}
      />


      {/* Creating an unordered list */}
      <ul>

        {/* List items */}
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>

      </ul>

    </div>
  );
}


// Exporting the TodoList component so it can
// be imported and displayed in App.jsx.
export default TodoList;