import { createContext, useState, useEffect, FC, useContext, PropsWithChildren } from "react";

import { Task } from "@types";

const LS_TASKS_KEY = 'tasks';

type TasksContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  updateTask: (taskId: string, updateInfo: Partial<Task>) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider: FC<PropsWithChildren> = ({ children }) => {
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
    <TasksContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTasksContext = () => {
  const ctx = useContext(TasksContext);

  if (ctx === undefined) {
    throw new Error("useTasksContext can only be used in a TasksProvider");
  }

  return ctx;
}
