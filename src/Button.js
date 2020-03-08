import React from 'react';
import './Button.css';
export default function Box(props) {
  return (
    <button className="Button" onClick={props.onClickRandomColor}>
      <h1 className="Button-text">Generate Color</h1>
    </button>
  );
}
