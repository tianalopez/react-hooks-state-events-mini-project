import React from "react";
import Task from "./Task"

function TaskList({tasks, onHandleDelete}) {

  const displayTask = tasks.map((task) => (<Task
    key={task.text}
    {...task}
    onHandleDelete={onHandleDelete}/>))

  return (
    <div className="tasks">
      {displayTask}
    </div>
  );
}

export default TaskList;
