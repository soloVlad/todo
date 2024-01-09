import { FC } from "react";

import type { Task } from "../../types";

type ListProps = {
  tasks: Task[]
}

const List: FC<ListProps> = ({ tasks }) => {
  const hasTasks = Boolean(tasks.length);

  return (
    <>
      {hasTasks && tasks.map(task => (
        <div>
          {task}
        </div>
      ))}
    </>
  )
}

export default List;
