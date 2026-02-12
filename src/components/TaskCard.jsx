import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function TaskCard({ task, column, setTasks }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    data: { column }
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    borderLeft:
      task.priority === "High"
        ? "6px solid red"
        : task.priority === "Medium"
        ? "6px solid orange"
        : "6px solid green"
  };

  const deleteTask = () => {
    setTasks(prev => ({
      ...prev,
      [column]: prev[column].filter(t => t.id !== task.id)
    }));
  };

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className="task" style={style}>
      <p>{task.text}</p>
      <small>{task.priority}</small>
      <button onClick={deleteTask}>✖</button>
    </div>
  );
}
