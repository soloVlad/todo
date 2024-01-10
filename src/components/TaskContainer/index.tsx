import { FC, useState } from "react";
import { IconTrash } from "@tabler/icons-react";
import cx from "clsx";

import { TaskStatus, type Task } from "@types";

import classes from './index.module.css';

type TaskContainerProps = {
  task: Task;
  removeTask: (taskId: string) => void;
  updateTask: (taskId: string, updateInfo: Partial<Task>) => void;
}

const TaskContainer: FC<TaskContainerProps> = ({ task, removeTask, updateTask }) => {
  const [isChecked, setIsChecked] = useState(() => {
    return task.status === TaskStatus.CREATED ? false : true;
  });

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
    <div className={classes.wrapper}>
      <input
        className={classes.check}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckClick}
      />

      <p
        className={cx(classes.description, {
          [classes.descriptionChecked]: task.status === TaskStatus.COMPLETED,
        })}
      >{task.description}</p>

      <button className={classes.removeButton} onClick={handleRemoveClick}>
        <IconTrash className={classes.trashIcon} size={28} />
      </button>
    </div>
  )
}

export default TaskContainer;
