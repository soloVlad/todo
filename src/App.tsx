import { useState } from "react"

import { Creator, List } from "./components"

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
      <List tasks={tasks} />
    </div>
  )
}

export default App
