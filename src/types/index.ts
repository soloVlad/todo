export enum TaskStatus {
  CREATED = 'created',
  COMPLETED = 'completed',
}

export type Task = {
  id: string;
  description: string;
  status: TaskStatus;
};
