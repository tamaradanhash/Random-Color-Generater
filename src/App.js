import React, { useState } from 'react';
import './App.css';
import Cover from './Cover';
import Button from './Button';
import Box from './Box';
import randomColor from 'randomcolor';

function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div className="Background">
      <Cover />
      <Box color={color} />
      <Button onClickRandomColor={() => setColor(randomColor())} />
    </div>
  );
}
export default App;
