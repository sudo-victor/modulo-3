interface IUser {
	"_id": string;
	"name": string;
	"email": string;
	"password": string;
	"photo": string;
	"createdAt": string;
	"updatedAt": string;
}

class UserMapper {
  static toClient(user: IUser) {
    return {
      "id": user._id,
      "name": user.name,
      "email": user.email,
      "photo": "http://localhost:3434/images/" + user.photo,
      "createdAt": user.createdAt,
      "updatedAt": user.updatedAt,
    }
  }
}

export { UserMapper, IUser }