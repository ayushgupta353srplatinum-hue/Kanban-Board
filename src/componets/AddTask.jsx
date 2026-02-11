import { useState } from "react";

export default function AddTask({ setTasks }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");

  const addTask = () => {
    if (!text.trim()) return;

    setTasks(prev => ({
      ...prev,
      todo: [
        ...prev.todo,
        { id: Date.now(), text, priority }
      ]
    }));

    setText("");
  };

  return (
    <div className="add-task">
      <input
        placeholder="Add new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
