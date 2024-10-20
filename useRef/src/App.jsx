
// import React, { useRef } from 'react'

// const App = () => {
//   const inputRef = useRef(null);

//   const handleFocus = () =>
//   {
//     inputRef.current.focus();//event.target.value
//   };
//   return (
//     <div>
//     <input type='text' ref={inputRef}/>
//     <button onClick={handleFocus}>focus the input</button>
//     </div>
//   )
// };

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [flag,setFlag] = useState(false)
//   const [value,setValue]= useState(0)
  
//   function handleCount()
//   {
//     setValue(value +1)
//     console.log(value)
//   }
//   console.log("render") 
//     return (
//     <>
//     <h1>count: {value}</h1>
//     <button onClick={handleCount}>click</button>
//     <button onClick={()=>setFlag(!flag)}>{flag ? "start": "stop"}</button>
//     </>
//   )
// }

// export default App




// import React, { useRef, useState } from 'react'

// const App = () => {
//   const [flag,setFlag] = useState(false)
//   const value = useRef(0)
  
//   function handleCount()
//   {
//     value.current = value.current + 1
//     console.log(value.current)
//   }
//   console.log("render") 
//     return (
//     <>
//     <h1>count: {value.current}</h1>
//     <button onClick={handleCount}>click</button>
//     <button onClick={()=>setFlag(!flag)}>{flag ? "start": "stop"}</button>
//     </>
//   )
// }

// export default App


//   import React, { useRef } from 'react'
//   const App = () => {
//   const inputRef = useRef([])
//   const HandleButton = ()=>
//   {
//     console.log(inputRef)
//     inputRef.current[2].focus()
//   };
//   console.log(inputRef)
//   return (
//     <> 
//      <input type="text"style={{width: "20px"}}   id="inputTag1" ref={(element)=>{return inputRef.current[0]=element}}/>
//      <input type="text"style={{width: "20px"}}   id="inputTag2" ref={(element)=>{return inputRef.current[1]=element}}/>
//      <input type="text"style={{width: "20px"}}   id="inputTag3" ref={(element)=>{return inputRef.current[2]=element}}/>
//      <input type="text"style={{width: "20px"}}   id="inputTag4" ref={(element)=>{return inputRef.current[3]=element}}/>
//      <input type="text"style={{width: "20px"}}   id="inputTag5" ref={(element)=>{return inputRef.current[4]=element}}/>
//      <button onClick={HandleButton}>Focus on Input</button>
//     </>
//   )
// }
// export default App




import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [count,setCount]= useState(10)
  const refId = useRef(0);
  useEffect(()=>
  {
    return ()=> {
      console.log("cleanup function")
    }
  },[]);

  const startTimer = ()=>
  {
    if(refId.current !==0)
    {
      return;
    }
   refId.current = setInterval(()=>{
      console.log("counter",Date.now());
      setCount((prev)=>{
       if(prev <=1)
       {
        clearInterval(refId.current);
       }
       else{
       return prev -1;
       }
      })

    },1000)
  }

  const stopTimer = ()=>
  {
    clearInterval(refId.current)
    refId.current = 0;
  };


console.log("render");
  return (
    <div>
      {count}
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
    </div>
  )
}

export default App
