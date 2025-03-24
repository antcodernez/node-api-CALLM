import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT,
    mongoUri : process.env.MONGO_URI,
    dbName: process.env.DB_NAME,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: process.env.JWT_EXPIRATION,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    refreshTokenExpiration: process.env.REFRESH_TOKEN_EXPIRATION,
    saltWorkFactor: parseInt(process.env.SALT_WORK_FACTOR)
}
