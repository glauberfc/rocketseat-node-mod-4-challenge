import express from 'express'

import { create, readAll, readOne, update, remove } from './controller'
import userAuth from '../../middlewares/userAuth'

const router = express.Router()

router.post('/', userAuth, create)
router.get('/', userAuth, readAll)
router.get('/:id', userAuth, readOne)
router.put('/:id', userAuth, update)
router.delete('/:id', userAuth, remove)
