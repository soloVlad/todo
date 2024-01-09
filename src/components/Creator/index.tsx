import { FC, useState } from "react";

import helpers from "../../helpers";

import type { Task } from "../../types";

type CreatorProps = {
  addTask: (task: Task) => void
}

const Creator: FC<CreatorProps> = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

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
    <div>
      <input
        value={taskDescription}
        onChange={handleInputTask}
      />

      <button onClick={handleAddClick}>Add</button>
    </div>
  )
}

export default Creator;
