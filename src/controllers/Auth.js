import { config } from '../config/config.js'
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../lib/token.js'
import { errorHandler } from '../middlewares/Error.js'
import User from '../models/User.js'

export const signIn = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username, enabled: true })

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }

        const match = await user.comparePassword(password)

        if(!match) {
            return res.status(400).json({ message: 'Contraseña incorrecta' })
        }
        const { _id:userId } = user;

        const token = generateAccessToken(userId);
        const refreshToken = generateRefreshToken(userId);
    
        const userObject = user.toObject();
        delete userObject.password;
        
        res.status(200).json({ token, refreshToken, user: userObject });
    } catch (error) {
        errorHandler(error, req, res)
    }
    
}   

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.headers["refreshtoken"]; // Obteniendo desde el header

        if (!refreshToken) {
            return res.status(401).json({ message: "Refresh token is required" });
        }

        // Verificar el refresh token usando la función de la librería
        const decoded = verifyRefreshToken(refreshToken);

        if (!decoded) {
            return res.status(403).json({ message: "Refresh token invalido" });
        }

        const userId = decoded.id;

        const user = await User.findById(userId).select("_id enabled");

        if (!user || !user.enabled) {
            return res.status(403).json({ message: "Usuario no encontrado" });
        }

        
        const newAccessToken = generateAccessToken(user._id);

        res.status(200).json({ token: newAccessToken });
    } catch (error) {
        errorHandler(error, req, res);
    }
}

export const logoutSession = async (req, res) => {
    
}
