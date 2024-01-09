import { FC, useState } from "react";

type CreatorProps = {
  addTask: (task: string) => void
}

const Creator: FC<CreatorProps> = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addTask(task);
    clearInput();
  }

  const handleInputTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }

  const clearInput = () => {
    setTask('');
  }

  return (
    <div>
      <input
        value={task}
        onChange={handleInputTask}
      />

      <button onClick={handleAddClick}>Add</button>
    </div>
  )
}

export default Creator;