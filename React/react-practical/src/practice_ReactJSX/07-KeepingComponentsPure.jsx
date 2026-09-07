// ----------------------------------------------------
// PRACTICAL 07: KEEPING COMPONENTS PURE
// ----------------------------------------------------


// Cup component receives guest as a prop.
//
// It does not modify any external variable.
//
// It only uses the input (guest) to produce JSX.
function Cup({ guest }) {

  // Same guest value will always produce
  // the same output.
  return (
    <h2>Tea cup for guest #{guest}</h2>
  );
}


// TeaSet is the parent component.
//
// It passes different guest values
// to each Cup component.
function TeaSet() {

  return (

    // Fragment groups multiple components
    // without adding an extra HTML element.
    <>

      {/* Passing guest number as a prop */}
      <Cup guest={1} />

      {/* Passing a different guest number */}
      <Cup guest={2} />

      {/* Passing another guest number */}
      <Cup guest={3} />

    </>
  );
}


// Exporting TeaSet as the main component
// for this practical.
export default TeaSet;