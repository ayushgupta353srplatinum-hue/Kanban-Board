import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import AddTask from "./components/AddTask";
import Column from "./components/Column";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState({
    todo: [],
    progress: [],
    done: []
  });

  const [search, setSearch] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("kanbanTasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const fromColumn = active.data.current.column;
    const toColumn = over.id;

    if (fromColumn === toColumn) return;

    const task = tasks[fromColumn].find(t => t.id === active.id);

    setTasks(prev => ({
      ...prev,
      [fromColumn]: prev[fromColumn].filter(t => t.id !== active.id),
      [toColumn]: [...prev[toColumn], task]
    }));
  };

  return (
    <div className="app">
      <h1> Kanban Task Board</h1>

      <input
        className="search"
        placeholder="Search task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <AddTask setTasks={setTasks} />

      <DndContext onDragEnd={handleDragEnd}>
        <div className="board">
          <Column title="To Do" id="todo" tasks={tasks.todo} setTasks={setTasks} search={search} />
          <Column title="In Progress" id="progress" tasks={tasks.progress} setTasks={setTasks} search={search} />
          <Column title="Done" id="done" tasks={tasks.done} setTasks={setTasks} search={search} />
        </div>
      </DndContext>
    </div>
  );
}
