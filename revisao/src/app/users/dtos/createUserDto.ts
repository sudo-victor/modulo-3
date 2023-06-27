import { CreatePhotoDTO } from "../../photos/dtos/createPhotoDto";

interface CreateUserDTO {
  name: string;
  nickname: string;
  email: string;
  password: string;
  photo: string;
}

interface CreateUserServiceDTO {
  name: string;
  nickname: string;
  email: string;
  password: string;
  photo: CreatePhotoDTO;
}

export { CreateUserDTO, CreateUserServiceDTO }