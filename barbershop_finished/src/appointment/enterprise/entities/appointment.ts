import { Entity } from "@/core/domain/entity";
import { Duration } from "../value-objects/duration";
import { UniqueId } from "@/core/domain/unique-id";

export interface AppointmentProps {
  scheduledAt: Date | null;
  status: "scheduled" | "canceled" | "completed";
  optionServiceId: UniqueId;
  duration: Duration;
  customerId: UniqueId;
}

export interface CreateAppointmentProps {
  scheduledAt: Date | null;
  status: "scheduled" | "canceled" | "completed";
  optionServiceId: string;
  duration: number;
  customerId: string;
}

export class Appointment extends Entity<AppointmentProps> {
  static create(props: CreateAppointmentProps, id?: UniqueId) {
    return new Appointment({
      ...props,
      customerId: new UniqueId(props.customerId),
      optionServiceId: new UniqueId(props.optionServiceId),
      duration: Duration.generateByServiceDuration(props.duration),
    }, id)
  }
}
