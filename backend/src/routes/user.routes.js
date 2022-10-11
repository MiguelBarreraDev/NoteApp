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
import userSignupController from "#controllers/users/user-signup.controller.js";
import userLoginController from "#controllers/users/user-login.controller.js";
import userPrfofileController from "#controllers/users/user-profile.controller.js";

const userRouter = Router()

userRouter
  .post('/signup', validateSignupDTO, userSignupController)
  .post('/login', validateLoginDTO, userLoginController)
  .get('/profile', validateJWT, userPrfofileController)
  .patch('/update-data', validateJWT, validateUpdateDataDTO)
  .patch('/update-email', validateJWT, validateUpdateEmailDTO)
  .patch('/update-password', validateJWT, validateUpdatePasswordDTO)
  .delete('/', validateJWT, validateUnsignupDTO)

export default userRouter
