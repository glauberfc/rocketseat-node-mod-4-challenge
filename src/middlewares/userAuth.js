import jwt from 'jsonwebtoken'

export default function userAuth(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  try {
    const [, token] = authorization.split(' ')
    const decodedData = jwt.verify(token, 'NodeMod3')

    req.body.userData = decodedData

    return next()
  } catch (error) {
    return res.status(401).json({ error: 'Auth failed' })
  }
}
