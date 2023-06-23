import { CreatePhotoDTO } from "../../photos/dtos/createPhotoDto";

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  photo: CreatePhotoDTO;
}

export { CreateUserDTO }