import { Router } from "express";

const routerUser = Router()

routerUser.get("/", (req, res) => {
    res.json({ message: "xd" });
});

export { routerUser };