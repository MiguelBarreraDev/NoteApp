import UserModel from "#schemas/user.schemas.js"

const userPrfofileController = async (req, res) => {
  const { id: userId } = req
  const { name, username, surname } = await UserModel.findOne({ _id: userId }).exec()

  return res.json({ id: userId, name, surname, username })
}

export default userPrfofileController
