import { useState } from "react"

import { Creator } from "./components"

import type { Task } from "./types";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  }

  console.log(tasks);

  return (
    <div>
      <Creator addTask={addTask} />
    </div>
  )
}

export default App
