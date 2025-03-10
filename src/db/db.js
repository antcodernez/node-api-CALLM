import mongoose from "mongoose";

import { config } from "../config/config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`${config.mongoUri}${config.dbName}`);
        console.log(`Succesfully conected to the database`);
    } catch (error) {
        console.log(`Error to connect to the database`);
        process.exit(1);
    }
}

export {
    connectDB
}