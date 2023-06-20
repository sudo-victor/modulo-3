class AuthView {
  static toClient(data: any) {
    const photo = "http://localhost:3434/images/" + data.user.photo
    return {
      token: data.token,
      user: {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        photo,
        createdAt: data.user.createdAt,
        updatedAt: data.user.updatedAt,
      }
    }
  }

}

export { AuthView }