import { FC } from "react";
import { IconTrash } from "@tabler/icons-react";
import cx from "clsx";

import { useTasksContext } from "@contexts/TasksContext";

import { TaskStatus, type Task } from "@types";

import classes from './index.module.css';

type TaskContainerProps = {
  task: Task;
}

const TaskContainer: FC<TaskContainerProps> = ({ task }) => {
  const { updateTask, removeTask } = useTasksContext();

  const handleCheckClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newIsCheck = event.target.checked;
    const newTaskStatus = newIsCheck ? TaskStatus.COMPLETED : TaskStatus.CREATED;

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
        checked={task.status === TaskStatus.COMPLETED}
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
