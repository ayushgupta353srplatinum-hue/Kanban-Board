import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

export default function Column({ title, id, tasks, setTasks, search }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="column">
      <h2>{title}</h2>

      {tasks
        .filter(task =>
          task.text.toLowerCase().includes(search.toLowerCase())
        )
        .map(task => (
          <TaskCard
            key={task.id}
            task={task}
            column={id}
            setTasks={setTasks}
          />
        ))}
    </div>
  );
}
