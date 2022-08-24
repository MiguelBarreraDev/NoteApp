import userRouter from '#routes/user.routes.js'
import express from 'express'

const expressApp = express()

// Middlewares
expressApp.use(express.json())

// Routes
expressApp.use('/users', userRouter)

export default expressApp
