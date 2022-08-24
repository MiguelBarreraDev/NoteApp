import { jwtVerify } from 'jose'

const validateJWT = async (req, res, next) => {
  const message = 'Unauthorized user'
  const { authorization: token } = req.headers

  if (!token) return res.status(401).json({ message })

  try {
    const encoder = new TextEncoder()
    const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_PRIVATE_KEY)
    )

    req.id = payload.id

    next()
  } catch (error) {
    return res.status(401).json({ message })
  }
}

export default validateJWT
