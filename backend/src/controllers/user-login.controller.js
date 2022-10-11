/**
 * This module defines a function as a handler for the
 * 'login' endpoint.
 */

import UserModel from '#schemas/user.schemas.js'
import { compare } from 'bcrypt'
import { SignJWT } from 'jose'

const userLoginController = async (req, res) => {
  const { username, password } = req.body

  // Verify the existence of the user in the database
  const existingUser = await UserModel.findOne({ username }).exec()
  if (!existingUser)
    return res.status(401).json({ error: 'Wrong credentials' })

  // Validate if the associated password is correct
  const checkPassword = await compare(password, existingUser.password)
  if (!checkPassword)
    return res.status(401).json({ error: 'Wrong credentials' })

  // Generate a JWT for the user who logs in to the application
  const encoder = new TextEncoder()
  const jwt = await new SignJWT({ id: existingUser._id })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT'})
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(encoder.encode(process.env.JWT_PRIVATE_KEY))

  return res.json({
    id: existingUser._id,
    name: existingUser.name,
    surname: existingUser.surname,
    username,
    jwt
  })
}

export default userLoginController
