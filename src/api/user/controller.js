import model from './model'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function signup(req, res) {
  const { name, email, password, passwordConfirmation } = req.body

  if (password !== passwordConfirmation) {
    return res
      .status(400)
      .json('Password and password confirmation should be equals')
  }

  if (await model.findOne({ email })) {
    return res
      .status(409)
      .json({ error: 'Already exists a user with this email' })
  }

  try {
    const user = await model.create({
      name,
      email,
      password,
    })

    return res.status(201).json({
      message: 'User created with success',
      user,
      request: {
        type: 'GET',
        url: `http://localhost:3000/users/${user.id}`,
      },
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export async function signin(req, res) {
  const { email, password } = req.body
  const user = await model.findOne({ email })

  try {
    if (!user) {
      return res.status(400).json({ error: `Email or password is wrong` })
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: `Email or password is wrong` })
    }

    return res.status(200).json({
      message: 'Login made with success',
      user,
      token: jwt.sign({ id: user.id }, 'NodeMod3', { expiresIn: '2d' }),
      request: {
        type: 'GET',
        url: `http://localhost:3000/users/${user.id}`,
      },
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export async function update(req, res) {
  const { userData, name, password, passwordConfirmation } = req.body

  if (password !== passwordConfirmation) {
    return res
      .status(400)
      .json('Password and password confirmation should be equals')
  }

  if (password.length < 3) {
    return res.status(400).json('The password need to be at least 3 characters')
  }

  try {
    const user = await model.findByIdAndUpdate(
      userData.id,
      { name, password },
      { new: true }
    )

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    return res.status(200).json({
      message: 'User updated with success',
      user,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
