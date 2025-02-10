import { useState } from "react";
import TaskItem from "./assets/components/TaskItem";
import AddButton from "./assets/components/AddButton";
import DeleteButton from "./assets/components/DeleteButton";

const App = () => {
  const defaultTasks = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do List", completed: false },
    { id: 3, text: "Master JavaScript", completed: false },
    { id: 4, text: "Apply for Jobs", completed: false },
  ];

  const [tasks, setTasks] = useState(defaultTasks);

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="relative max-w-md mx-auto mt-10 p-5 border rounded shadow-lg bg-black text-white">
      <h2 className="text-xl font-bold mb-4 text-center">To-Do List</h2>

      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} />
        ))}
      </div>

      {/* Buttons at Bottom-Right */}
      <div className="flex space-x-3 mt-4">
        <AddButton addTask={() => {}} />
        <DeleteButton deleteTask={() => {}} />
      </div>
    </div>
  );
};

export default App;