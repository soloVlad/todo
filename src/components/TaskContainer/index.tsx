import { FC } from "react";

import type { Task } from "../../types";

type TaskContainerProps = {
  task: Task;

}

const TaskContainer: FC<TaskContainerProps> = ({ task }) => {
  return (
    <div>
      {task.description}

      <button>delete</button>
    </div>
  )
}

export default TaskContainer;
