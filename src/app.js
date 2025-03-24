import express from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";

import { connectDB } from "./db/db.js"
import { swaggerSpec } from "./swaggerOptions.js";
import { routerAPI } from "./routes/index.js";
import { handleRoutesNotFound } from "./middlewares/HandleRoutesNotFound.js";

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
    res.send(`
        <h1 style="font-family: monospace; text-align: center; margin-top: 40px;">
            Welcome to my callm API
        </h1>
        <h2 id="timer" style="text-align: center; font-family: monospace;"></h2>
        <script>
            let timeLeft = 5;

            const timerElement = document.getElementById("timer");
            const countdown = setInterval(() => {
                timerElement.textContent = "Redirigiendo en: " + timeLeft + " segundos";
                timeLeft--;

                if (timeLeft < 0) {
                    clearInterval(countdown);
                    window.location.href = '/api/v1/docs/';
                }
            }, 1000);
        </script>
    `)
})


// Implement the main router in the app
routerAPI(app);

app.get("/api/v1/swagger.json", (req, res) => {
    res.json(swaggerSpec);
});

// Definition of the swagger docs
// Forzar el uso correcto de archivos estáticos en producción
app.use("/api-docs", swaggerUi.serve, async (req, res, next) => {
    try {
      const html = swaggerUi.generateHTML(swaggerDocument);
      res.send(html);
    } catch (error) {
      next(error);
    }
  });
  
// Handle Routes not found
app.use(handleRoutesNotFound);

export {
    app
} 