import React,{useState,useEffect} from 'react'

function useCustomCounter()
{
  const [count,setCount]=useState(0);
  const handleIncrement =()=>{
    setCount(count+1);
  };
  return {
    count,
    handleIncrement
  };
}

export default useCustomCounter;


//run below code in app.jsx


// import React from "react";
// import useCustomCounter from "./Hooks/custom";
// function App(){
//   const data = useCustomCounter();
//   return (
//     <React.Fragment>
//       <h1>Count Up :{data.count}</h1>
//       <button type="button" onClick={data.handleIncrement}>Increment</button>
//     </React.Fragment>
//   );
// }
// export default App;