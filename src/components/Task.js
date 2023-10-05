import React from "react";

function Task({text, category, onHandleDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => onHandleDelete(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
