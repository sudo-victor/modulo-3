import { UniqueId } from "./unique-id";

export class Entity<Props> {
  id: UniqueId;
  protected props: Props

  constructor(props: Props, id?: UniqueId) {
    this.id = id ?? new UniqueId()
    this.props = props;
  }
}