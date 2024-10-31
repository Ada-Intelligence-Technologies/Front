
export type id = number;

export type createTaskDto = {
  title: string;
  description: string;
}

export type Task = {
  id: id;
  title: string;
  description: string;
  completed: boolean;
}
