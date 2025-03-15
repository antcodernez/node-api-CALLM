import { Router } from "express"

import { routerUser } from "./v1/user.js";

const routerAPI = ( app ) => {
    const router = Router();

    app.use("/api/v1/", router);
    router.use("/users", routerUser);
    
}

export {
    routerAPI
}
