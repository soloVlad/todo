import { useState } from "react"

import { Creator } from "./components"

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
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
