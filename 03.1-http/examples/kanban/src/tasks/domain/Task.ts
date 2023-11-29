import { BaseDomain } from "../../shared/domain/BaseDomain";

export interface TaskProps {
  title: string;
  content: string;
  status: "pending" | "doing" | "done";
}

export class Task extends BaseDomain {
  title: string
  content: string
  status: string

  constructor(props: TaskProps) {
    super()
    this.title = props.title;
    this.content = props.content
    this.status = props.status
  }
}