import express from 'express'

import userRouter from './api/user/router'

const router = express.Router()

router.use('/users', userRouter)

export default router
