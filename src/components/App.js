import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [currentTasks, setCurrentTasks] = useState(TASKS)
  const [currentCategory, setCurrentCategory] = useState("All")

  const visibleTasks = currentTasks.filter((task) => (
      currentCategory === "All" || task.category === currentCategory
    ))
    console.log(visibleTasks)
  const onTaskFormSubmit = (newTask) => {
    setCurrentTasks([...currentTasks, newTask])
  }
  const onHandleDelete = (deletedTaskText) => {
    const displayedTasks = currentTasks.filter((task) => (
      task.text !== deletedTaskText))
    setCurrentTasks(displayedTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={setCurrentCategory}chosenCategory={currentCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={visibleTasks} onHandleDelete={onHandleDelete}/>
    </div>
  );
}

export default App;
