import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getAllUser);
userRouter.get("/getalltodo", userController.getAllTodByUser);
userRouter.put("/edit", userController.editUser);

export { userRouter };