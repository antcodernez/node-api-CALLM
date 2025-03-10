import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT,
    mongoUri : process.env.MONGO_URI,
    dbName: process.env.DB_NAME
}
