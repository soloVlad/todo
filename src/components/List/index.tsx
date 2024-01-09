import { FC } from "react";

import { TaskContainer } from "..";

import type { Task } from "../../types";

type ListProps = {
  tasks: Task[]
}

const List: FC<ListProps> = ({ tasks }) => {
  const hasTasks = Boolean(tasks.length);

  return (
    <>
      {hasTasks && tasks.map(task => (
        <TaskContainer key={task.id} task={task} />
      ))}
    </>
  )
}

export default List;
