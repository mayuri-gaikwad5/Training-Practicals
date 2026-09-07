// ----------------------------------------------------
// PRACTICAL 01: YOUR FIRST REACT COMPONENT
// ----------------------------------------------------

import imag1 from "./imag1.png";

// Profile Component
// A React component is a JavaScript function that returns
// JSX (UI elements).
function Profile() {
  return (
    <img
      // Source URL of the image
      src={imag1}

      // Alternative text displayed if the image cannot load
      // It also improves accessibility.
      alt="Katherine Johnson"
      width="200"
      height="200"
    />
  );
}


// Gallery Component
// This component acts as the main component.
// It contains a heading and multiple Profile components.
export default function Gallery() {
  return (
    <section>

      {/* Main heading of the Gallery */}
      <h1>Amazing Scientists</h1>


      {/* 
        Using the Profile component.

        <Profile /> tells React to render the UI
        returned by the Profile component.

        The same component can be reused multiple times.
      */}

      <Profile />
      <Profile />
      <Profile />

    </section>
  );
}