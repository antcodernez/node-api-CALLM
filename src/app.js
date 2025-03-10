import express from "express"
import swaggerUi from "swagger-ui-express"

import { connectDB } from "./db/db.js"
import { swaggerSpec } from "./swaggerOptions.js";
const app = express()


connectDB();


app.get("/", (req, res) => {
    res.send(`<h1 style="font-family: monospace; text-align: center; margin-top: 40px;">Welcome to my callm API</h1>`)
})

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export {
    app
} 