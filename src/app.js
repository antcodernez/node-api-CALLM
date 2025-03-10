import express from "express"

import { connectDB } from "./db/db.js"
const app = express()


connectDB();


app.get("/", (req, res) => {
    res.send(`<h1 style="font-family: monospace; text-align: center; margin-top: 40px;">Welcome to my callm API</h1>`)
})

export {
    app
} 