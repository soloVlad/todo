import { FC } from "react";

import { TaskContainer } from "@components";

import type { Task } from "@types";

import classes from './index.module.css';

type ListProps = {
  tasks: Task[];
  removeTask: (taskId: string) => void;
  updateTask: (taskId: string, updateInfo: Partial<Task>) => void;
}

const List: FC<ListProps> = ({ tasks, removeTask, updateTask }) => {
  const hasTasks = Boolean(tasks.length);

  return (
    <div className={classes.list}>
      {hasTasks && tasks.map(task => (
        <TaskContainer
          key={task.id}
          task={task}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  )
}

export default List;
