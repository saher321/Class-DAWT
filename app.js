import express from 'express'
import cors from 'cors'
import { sendResponse } from './src/helper/sender.js'
import authRouter from './src/routes/auth.routes.js'

export const app = express()


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api', authRouter)




