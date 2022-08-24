import { Router } from "express";
import {
  validateLoginDTO,
  validateSignupDTO,
  validateUnsignupDTO,
  validateUpdateDataDTO,
  validateUpdateEmailDTO,
  validateUpdatePasswordDTO
} from "#middlewares/validateUserDataDTO.js"
import validateJWT from "#middlewares/validateJWT.js";
import userSignupController from "#controllers/user-signup.controller.js";

const userRouter = Router()

userRouter
  .post('/signup', validateSignupDTO, userSignupController)
  .post('/login', validateLoginDTO)
  .get('/profile', validateJWT)
  .patch('/update-data', validateJWT, validateUpdateDataDTO)
  .patch('/update-email', validateJWT, validateUpdateEmailDTO)
  .patch('/update-password', validateJWT, validateUpdatePasswordDTO)
  .delete('/unsignup', validateJWT, validateUnsignupDTO)

export default userRouter
