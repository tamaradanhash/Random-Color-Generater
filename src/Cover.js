import React, { useState } from 'react';
import './Cover.css';

export default function Cover() {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="Cover" hidden={hidden}>
      <button className="X" onClick={() => setHidden(true)}>
        &times;
      </button>
      <p className="Paragraph">
        Welcome to our Random Color Generator website where you can generate
        your own color and get Hex code for that color
      </p>
    </div>
  );
}
