import { FC, useState } from "react";
import { IconPlus } from "@tabler/icons-react";

import helpers from "@helpers";

import { Task } from "@types";

import classes from './index.module.css';

type CreatorProps = {
  addTask: (task: Task) => void
}

const Creator: FC<CreatorProps> = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState<string | null>();

  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!taskDescription) return;

    const task = helpers.createTask(taskDescription);

    addTask(task);
    clearInput();
  }

  const handleInputTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(event.target.value);
  }

  const clearInput = () => {
    setTaskDescription('');
  }

  return (
    <div className={classes.wrapper}>
      <input
        className={classes.input}
        value={taskDescription ?? undefined}
        placeholder="Enter new ambitious task..."
        onChange={handleInputTask}
      />

      <button
        className={classes.button}
        onClick={handleAddClick}
      >
        <IconPlus stroke={3} color="#fff" size={36} />
      </button>
    </div>
  )
}

export default Creator;
