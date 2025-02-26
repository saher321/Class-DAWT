import express from 'express'
import { login, profile, register, update } from '../controller/auth.controller.js'

import { isAuth } from '../middleware/isAuth.js'
import { addProduct } from '../controller/salesProduct.controller.js'

const router = express.Router()



router.post('/register', register)
router.post('/login', login)
router.post('/update',isAuth, update)
router.get('/profile',isAuth, profile)

router.get('/add/product',isAuth, addProduct)





export default router