import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const handleFormSubmit = (event) => {
    event.preventDefault()

    onTaskFormSubmit({text, category})
    setText("");
    setCategory("Code")
  }

  const noAllCategory = categories.filter((category) => category !== "All")
  const renderCategory = noAllCategory.map((category) => (
    <option key={category} value={category}>{category}</option>
  ))

  return (
    <form onSubmit={handleFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={e => setText(e.target.value)} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={e => setCategory(e.target.value)} name="category">
          {renderCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
