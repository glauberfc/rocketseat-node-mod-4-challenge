import express from 'express'

import { signup, signin, update } from './controller'
import userAuth from '../../middlewares/userAuth'

const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.put('/', userAuth, update)

export default router
