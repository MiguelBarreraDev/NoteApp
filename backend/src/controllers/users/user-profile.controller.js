import UserModel from "#schemas/user.schemas.js"

const userPrfofileController = async (req, res) => {
  const { id } = req 

  const existingUserById = await UserModel.findById(id).exec()
  if (!existingUserById)
    return res.send(401).json({ error: 'Unauthorized user' })

  const { _id, name, surname, username } = existingUserById

  return res.json({ id: _id, name, surname, username })
}

export default userPrfofileController
