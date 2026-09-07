// ----------------------------------------------------
// PRACTICAL 06: RENDERING LISTS
// ----------------------------------------------------


// Creating an array of objects.
//
// Each object represents one scientist.
const people = [

  {
    id: 1,
    name: "Katherine Johnson",
    profession: "Mathematician",
    accomplishment: "Calculated flight trajectories for NASA missions",
  },

  {
    id: 2,
    name: "Alan Turing",
    profession: "Computer Scientist",
    accomplishment: "Made major contributions to computer science",
  },

  {
    id: 3,
    name: "Marie Curie",
    profession: "Physicist and Chemist",
    accomplishment: "Conducted pioneering research on radioactivity",
  },

];


// List is the main React component.
function List() {

  /*
    map() is a JavaScript array method.

    It goes through each object in the people array
    one by one and creates a JSX element for it.

    person represents the current object.

    The result is stored in listItems.
  */
  const listItems = people.map((person) => (

    /*
      Each item in a React list needs a unique key.

      key={person.id} helps React identify each item
      if the list changes in the future.
    */
    <li
      key={person.id}

      // Styling each list item.
      style={{
        marginBottom: "15px",
        padding: "10px",
        border: "1px solid black",
      }}
    >

      {/*
        Displaying the person's name.

        Curly braces {} allow JavaScript values
        to be used inside JSX.
      */}
      <b>{person.name}:</b>


      {/* Displaying the person's profession */}
      {" " + person.profession + " "}


      {/* Displaying the person's accomplishment */}
      known for {person.accomplishment}

    </li>
  ));


  // Returning the JSX to be displayed.
  return (

    <article>

      {/* Main heading */}
      <h1>Scientists</h1>


      {/*
        Rendering the array of JSX elements.

        listItems contains multiple <li> elements
        created using the map() function.
      */}
      <ul>
        {listItems}
      </ul>

    </article>
  );
}


// Exporting the List component.
export default List;