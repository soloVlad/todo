import { useState } from "react";
import { IconPlus } from "@tabler/icons-react";

import helpers from "@helpers";
import { useTasksContext } from "@contexts/TasksContext";

import classes from './index.module.css';

type AddTaskEvent = React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>;

const Creator = () => {
  const [taskDescription, setTaskDescription] = useState<string | null>();

  const { addTask } = useTasksContext();

  const handleAddClick = (event: AddTaskEvent) => {
    event.preventDefault();

    if (!taskDescription) return;

    const task = helpers.createTask(taskDescription);

    addTask(task);
    clearInput();
  }

  const handleEnterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddClick(event);
    }
  };

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
        onKeyDown={handleEnterPressed}
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
