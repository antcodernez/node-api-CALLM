import { Router } from "express"

import { routerUser } from "./v1/user.js";
import { authRouter } from "./v1/auth.js";

const routerAPI = ( app ) => {
    const router = Router();

    app.use("/api/v1/", router);
    router.use("/users", routerUser);
    router.use("/auth", authRouter);
    
}

export {
    routerAPI
}
