// ----------------------------------------------------
// PRACTICAL 02: WRITING MARKUP WITH JSX
// ----------------------------------------------------
import imag1 from "./imag1.png";

// Creating a React component named TodoList.
function TodoList() {

  // Styling for the image.
  //
  // In JSX, CSS properties are written in camelCase.
  // For example:
  // object-fit  → objectFit
  const imageStyle = {
    width: "250px",
    height: "250px",
    objectFit: "cover",
  };


  return (

    // <> </> is called a React Fragment.
    // It groups multiple elements without adding
    // an extra HTML element like <div>.
    <>
      
      {/* JSX heading element */}
      <h1>Hedy Lamarr's Todos</h1>


      {/*
        JSX image element.

        JSX requires self-closing tags.
        Therefore, we use <img />.
      */}
      <img
        // URL of the image
        src={imag1}

        // Alternative text for accessibility
        alt="Hedy Lamarr"

        // Applying the JavaScript style object.
        // Double curly braces are used because:
        // First {} → enter JavaScript inside JSX
        // Second {} → JavaScript object
        style={imageStyle}
      />


      {/* Unordered list */}
      <ul>

        {/* Each list item is properly closed */}
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>

      </ul>

    </>
  );
}


// Exporting TodoList so it can be imported in App.jsx.
export default TodoList;