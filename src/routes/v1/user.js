import { Router } from "express";
import { createUser } from "../../controllers/user.js";

const routerUser = Router()

routerUser.get("/create", createUser);

export { routerUser };