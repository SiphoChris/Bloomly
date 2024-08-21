import {Router, json} from "express";
import {user} from "../models/index.js"

// routes
const userRouter = Router();

// middleware
userRouter.use(json());


userRouter.get("^/$|^/all$", (req, res) => {
  user.fetchAllUsers(req, res);
});

userRouter.get("/:userID", (req, res) => {
  user.fetchUserByID(req, res);
})

userRouter.post("/register", (req, res) => {
  user.registerUser(req, res);
})

userRouter.post("/login", (req, res) => {
  user.loginUser(req, res);
})

userRouter.patch("/update/:userID", (req, res) => {
  user.updateUser(req, res);
})

userRouter.delete("/delete/:userID", (req, res) => {
  user.deleteUser(req, res);
})


export default userRouter