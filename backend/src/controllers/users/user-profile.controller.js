import UserService from "#services/user.services.js"

const userService = new UserService()

const userPrfofileController = async (req, res) => {
  const { id } = req

  const existingUserById = await userService.findById(id)
  if (!existingUserById)
    return res.sendStatus(401).json({ error: 'Unauthorized user' })

  return res.json({
    id: existingUser._id,
    name: existingUser.name,
    surname: existingUser.surname,
    username: existingUser.username,
    email: existingUser.email,
  })
}

export default userPrfofileController
