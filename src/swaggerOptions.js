import swaggerJSDoc from "swagger-jsdoc"

import { INFO } from "./swagger/info.js"
import { SERVERS } from "./swagger/servers.js"
import SCHEMAS from "./swagger/schemas/index.js"
import { SECURITY } from "./swagger/security.js"

const swaggerOptions = {
    swaggerDefinition: {
        openapi: `3.0.0`,
        info: INFO,
        servers: SERVERS,
        components: {
            schemas: SCHEMAS,
            securitySchemes: SECURITY
        }
    },
    apis: ["./src/routes/v1/*.js"]
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

export {
    swaggerSpec
}