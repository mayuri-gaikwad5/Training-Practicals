// ----------------------------------------------------
// PRACTICAL 04: PASSING PROPS TO A COMPONENT
// ----------------------------------------------------

import imag1 from "./imag1.png";
// Profile is the parent component.
//
// It passes information (props) to its child components:
// Card and Avatar.
function Profile() {

  return (

    // Card is a child component.
    //
    // The Avatar component is placed between
    // <Card> and </Card>.
    <Card>

      {/* 
        Passing props to the Avatar component.

        size={200} passes a number.

        person={{...}} passes a JavaScript object.
      */}
      <Avatar
        size={200}
        person={{
          name: "Katsuko Saruhashi",
          imageUrl: imag1,
        }}
      />

    </Card>
  );
}


// ----------------------------------------------------
// AVATAR COMPONENT
// ----------------------------------------------------


// The Avatar component receives props from Profile.
//
// { person, size } is called destructuring.
//
// Instead of writing:
// props.person
// props.size
//
// We directly receive:
// person
// size
function Avatar({ person, size }) {

  return (

    <img

      // Displaying the image URL received through
      // the person prop.
      src={person.imageUrl}

      // Using the person's name as alternative text.
      alt={person.name}

      // Using the size prop for image width.
      width={size}

      // Using the size prop for image height.
      height={size}

      // Inline styling for the image.
      style={{
        objectFit: "cover",
        borderRadius: "50%",
      }}
    />

  );
}


// ----------------------------------------------------
// CARD COMPONENT
// ----------------------------------------------------


// The Card component receives a special prop
// called children.
//
// children represents the content placed inside:
//
// <Card>
//    content
// </Card>
function Card({ children }) {

  return (

    <div

      // Styling the Card component.
      style={{
        padding: "20px",
        border: "2px solid black",
        width: "250px",
        textAlign: "center",
      }}
    >

      {/*
        {children} displays whatever is placed
        between <Card> and </Card>.

        In this example, children is:
        <Avatar ... />
      */}
      {children}

    </div>

  );
}


// Exporting Profile as the main component
// for this practical.
export default Profile;