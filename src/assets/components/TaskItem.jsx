const TaskItem = ({ task, toggleComplete }) => {
    return (
      <div className="flex items-center border p-2 w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mr-2 accent-green-500" 
        />
        <span className={`${task.completed ? "line-through" : ""}`}>
          {task.text}
        </span>
      </div>
    );
  };
  
  export default TaskItem;
  
  