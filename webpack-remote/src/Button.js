import React, { useState} from 'react';
import { Button as AntdButton } from 'antd';


const Button = () => {
    const [count, setCount] = useState(0)
    return <AntdButton onClick={() => setCount(count+1)}>App 2 Button {count}</AntdButton>
};

export default Button;
