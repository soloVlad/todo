import { FC, useState } from "react";

import { TaskStatus, type Task } from "../../types";

type TaskContainerProps = {
  task: Task;
  removeTask: (taskId: string) => void;
  updateTask: (taskId: string, updateInfo: Partial<Task>) => void;
}

const TaskContainer: FC<TaskContainerProps> = ({ task, removeTask, updateTask }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newIsCheck = event.target.checked;
    const newTaskStatus = newIsCheck ? TaskStatus.COMPLETED : TaskStatus.CREATED;

    setIsChecked(newIsCheck);
    updateTask(task.id, { status: newTaskStatus });
  }

  const handleRemoveClick = () => {
    removeTask(task.id);
  }

  return (
    <div>
      <input
        type="checkbox"
        onChange={handleCheckClick}
      />

      {task.description}

      <button onClick={handleRemoveClick}>remove</button>
    </div>
  )
}

export default TaskContainer;
