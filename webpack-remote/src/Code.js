import CodeMirror from '@uiw/react-codemirror'
import React from 'react';
const Codemirror = (props) => {
  return <CodeMirror style={{ border: '1px solid #eee' }} {...props} />
}

export default Codemirror