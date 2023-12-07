export interface CreateTaskDTO {
  userId: string;
  title: string;
  content: string;
}

export interface UpdateTaskStatusDTO {
  taskId: string;
  status: string
}