import { Entity } from "@/core/domain/entity";
import { Duration } from "../value-objects/duration";
import { UniqueId } from "@/core/domain/unique-id";

export interface OptionServiceProps {
  name: string;
  description: string;
  duration: Duration;
  photo: string;
}

interface CreateOptionServiceProps {
  name: string;
  description: string;
  duration: number;
  photo: string;
}

export class OptionService extends Entity<OptionServiceProps> {
  static create(props: CreateOptionServiceProps, id?: UniqueId) {
    return new OptionService({
      ...props,
      duration: Duration.generate(props.duration)
    }, id)
  }
}
