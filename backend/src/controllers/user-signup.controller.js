import UserModel from '#schemas/user.schemas.js'
import { hash } from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

const userSignupController = async (req, res) => {
  const { name, surname, username, email, password } = req.body

  const existingUserByUsername = await UserModel.findOne({ username })
  if (existingUserByUsername)
    return res
      .status(409)
      .json({
        field: 'username',
        message: 'There is already a user with this username'
      })

  const existingUserByEmail = await UserModel.findOne({ email })
  if (existingUserByEmail)
    return res
      .status(409)
      .json({
        field: 'email',
        message: 'There is already a user with this email'
      })

  const generatedId = await uuidv4() // TODO: investigate how it works
  const hashedPassword = await hash(password, 10) // TODO: investigate how it works
  const user = new UserModel({
    _id: generatedId,
    name,
    surname,
    username,
    password: hashedPassword
  })

  await user.save()

  res.json({ message: 'Successfully registered user' })
}

export default userSignupController
