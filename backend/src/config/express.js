import userRouter from '#routes/user.routes.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

const expressApp = express()

// Middlewares
expressApp.use(morgan('tiny'))
expressApp.use(cookieParser())
expressApp.use(express.json())
expressApp.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))

// Routes
expressApp.use('/users', userRouter)

export default expressApp
