import { useState } from "react"

import { Creator, List } from "./components"

import type { Task } from "./types";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  }

  const removeTask = (taskId: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  const updateTask = (taskId: string, updateInfo: Partial<Task>) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id !== taskId) return task;

      return { ...task, ...updateInfo }
    }))
  }

  return (
    <div>
      <Creator addTask={addTask} />
      <List tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
    </div>
  )
}

export default App
