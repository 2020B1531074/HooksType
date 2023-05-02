
import React ,{useMemo,useEffect,useState,useCallback} from 'react';
function App() {
  const[count,setCount]=useState(0)
  const[count2,setCount2]=useState(0)
  const inc=()=>{
    setCount(count+1)
  
  }
  const inc2=()=>{

    setCount2(count2+1)
  }
const isEven=useMemo(()=>{
  console.log("works")
  let i=0
  while(i<50000)
  {
    i++
  }
  if(count%2==0){
    return "Even"
  }
  else{
    return "odd"
  }
},[count])

  return (
    <div className="App">
   <button onClick={inc}>Clicked{count} Times</button>
   <span>{isEven}</span>
   <button onClick={inc2}>Clicked {count2}Times</button>
    </div>
  );
}

export default App;
