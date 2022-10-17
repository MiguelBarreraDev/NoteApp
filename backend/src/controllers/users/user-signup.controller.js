import UserModel from '#models/user.models.js'
import { hash } from 'bcrypt'
import { signJWT } from '#utils/jwt.utils.js'
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

  // Generate a JWT for the user who logs in to the application
  const jwt = signJWT({ id: user._id })

  res.status(201).json({
    message: 'Successful registration',
    id: user._id,
    username: user.username,
    jwt
  })
}

export default userSignupController
