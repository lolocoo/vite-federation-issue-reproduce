import React, { useState } from "react";
import { Button  } from 'antd'

export default ({caption = "Home Button"}) => {
  const [count, setCount] = React.useState(0)
  return (<Button onClick={() => setCount(count+1) } className='remote-btn'>{caption}{' '}{count}</Button>)
};