import UserModel from "#schemas/user.schemas.js"

const userPrfofileController = async (req, res) => {
  const { id: userId } = req
  const { username } = await UserModel.findOne({ _id: userId }).exec()

  return res.json({ username, id: userId })
}

export default userPrfofileController
