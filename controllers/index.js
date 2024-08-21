import { Router } from "express";
import userRouter from './usersController.js'
import productRouter from './productsController.js'

const router = Router()

router.use('/api/users',userRouter)
router.use('/api/shop', productRouter)

export default router

