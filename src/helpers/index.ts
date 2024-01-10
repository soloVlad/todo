import { v4 as uuid } from 'uuid';

import { Task, TaskStatus } from "@types";

const createTask = (taskDescription: string): Task => {
  const id = uuid();

  return {
    id,
    description: taskDescription,
    status: TaskStatus.CREATED,
  }
}

export default {
  createTask,
}
