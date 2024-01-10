import { FC } from "react";

import { TaskContainer } from "@components";

import type { Task } from "@types";

type ListProps = {
  tasks: Task[];
  removeTask: (taskId: string) => void;
  updateTask: (taskId: string, updateInfo: Partial<Task>) => void;
}

const List: FC<ListProps> = ({ tasks, removeTask, updateTask }) => {
  const hasTasks = Boolean(tasks.length);

  return (
    <>
      {hasTasks && tasks.map(task => (
        <TaskContainer
          key={task.id}
          task={task}
          removeTask={removeTask}
          updateTask={updateTask}
        />
      ))}
    </>
  )
}

export default List;
