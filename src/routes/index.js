import { Router } from "express"

import { routerUser } from "./user.js";

const routerAPI = ( app ) => {
    const router = Router();

    app.use("/api/v1/", router);
    router.use("/users", routerUser);
    
}

export {
    routerAPI
}
