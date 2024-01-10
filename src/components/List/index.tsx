import { TaskContainer } from "@components";
import { useTasksContext } from "@contexts/TasksContext";

import classes from './index.module.css';

const List = () => {
  const { tasks } = useTasksContext();

  const hasTasks = Boolean(tasks.length);

  return (
    <div className={classes.list}>
      {hasTasks && tasks.map(task => (
        <TaskContainer
          key={task.id}
          task={task}
        />
      ))}
    </div>
  )
}

export default List;
