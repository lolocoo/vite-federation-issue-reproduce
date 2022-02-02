import React ,{useState} from "react";

export default ({caption = "Home Button"}) => {
  // return <button>vite remote button without hook</button>
  const [count, setCount] = useState(0)
  return (<button onClick={() => setCount(count+1) } className='remote-btn'>{caption}{count}</button>)
};