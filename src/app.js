import express from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";

import { connectDB } from "./db/db.js"
import { swaggerSpec } from "./swaggerOptions.js";
import { routerAPI } from "./routes/index.js";
import { handleRoutesNotFound } from "./middlewares/handleRoutesNotFound.js";

const app = express()

// connect to the DB
connectDB();

// Middleware to JSON
app.use(express.json()); 

// Dishable the header x-powered-by
app.disable('x-powered-by')

//use morgan
app.use(morgan("dev"))

// Welcome message
app.get("/", (req, res) => {
    res.send(`<h1 style="font-family: monospace; text-align: center; margin-top: 40px;">Welcome to my callm API</h1>`)
})

// Implement the main router in the app
routerAPI(app);

// Definition of the swagger docs
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Handle Routes not found
app.use(handleRoutesNotFound);

export {
    app
} 