// ----------------------------------------------------
// PRACTICAL 05: CONDITIONAL RENDERING
// ----------------------------------------------------


// Item component receives two props:
//
// name     → name of the item
// isPacked → tells whether the item is packed or not
function Item({ name, isPacked }) {

  return (

    // <li> represents one item in the list.
    <li>

      {/* Displaying the name received through props */}
      {name}


      {/*
        CONDITIONAL RENDERING USING &&

        The && operator checks the condition.

        If isPacked is true:
            Display the checkmark.

        If isPacked is false:
            Display nothing.
      */}
      {isPacked && " ✅"}

    </li>
  );
}


// PackingList is the main component.
function PackingList() {

  return (

    <section>

      {/* Heading of the packing list */}
      <h1>Sally Ride's Packing List</h1>


      {/* Creating an unordered list */}
      <ul>

        {/*
          Passing props to the Item component.

          isPacked={true}

          Since the condition is true,
          the checkmark will be displayed.
        */}
        <Item
          isPacked={true}
          name="Space suit"
        />


        {/*
          isPacked is true,
          so the checkmark will be displayed.
        */}
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />


        {/*
          isPacked is false.

          Therefore, the checkmark will NOT
          be displayed.
        */}
        <Item
          isPacked={false}
          name="Photo of Tam"
        />

      </ul>

    </section>
  );
}


// Exporting PackingList as the main component
// of this practical.
export default PackingList;