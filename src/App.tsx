import { useEffect, useState } from "react"

import { Creator, List } from "./components"

import type { Task } from "./types";

const LS_TASKS_KEY = 'tasks';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const loadedTasksString = window.localStorage.getItem(LS_TASKS_KEY);

    if (loadedTasksString) {
      return JSON.parse(loadedTasksString);
    }

    return [];
  });

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

  useEffect(() => {
    window.localStorage.setItem(LS_TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Creator addTask={addTask} />
      <List tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
    </div>
  )
}

export default App
