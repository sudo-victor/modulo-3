import { Encrypt } from "@/appointment/application/cryptography/encrypt";

export class HasherFaker implements Encrypt {
  encrypt(value: string): string {
    return value + "_hashed"
  }
}