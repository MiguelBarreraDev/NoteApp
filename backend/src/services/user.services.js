import UserModel from "#models/user.models.js"

class UserService {
  async create (userData) {
    const { id, ...rest } = userData
    const newUser = new UserModel({ _id: id, ...rest })

    await newUser.save()

    return newUser
  }
  
  async findById (id) {
    const userFound = await UserModel.findById(id).exec()

    if (!userFound) return null

    const { _id, name, surname, username, email, password } = userFound

    return { id: _id, name, surname, username, email, password }
  }

  async findBy (filter) {
    const userFound = await UserModel.findOne(filter).exec()

    if (!userFound) return null

    const { _id, name, surname, username, email, password } = userFound

    return { id: _id, name, surname, username, email, password }
  }

  async update (userData) {
    const { id, ...rest } = userData

    await UserModel.findByIdAndUpdate(id, rest)
  }
}

export default UserService
