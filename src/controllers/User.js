import { isPasswordStrong } from "../lib/isPasswordStrong.js";
import { errorHandler } from "../middlewares/Error.js";
import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const {name, email, password, lastName, phone, role, dob, username } = req.body;
    
        if (!isPasswordStrong(password)) {
            res.status(400).json({ message: "La contraseña no cunple con los requisitos de seguridad necesarios" })
            return
        }
    
        const newUser = new User({
            name,
            lastName,
            dob,
            password,
            phone,
            email,
            username,
            role
        })
    
        await newUser.save()
    
        res.status(201).json({ message: 'Usuario creado exitosamente.' })
    } catch (error) {
        errorHandler(error, req, res)
    }
 
};  

// Get user by ID
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ _id: id, enabled: true });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json(user);
    } catch (error) {
        errorHandler(error, req, res)
    }
};

// Update user details
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, lastName, phone, role, dob, username } = req.body;
        const updatedUser = await User.findOneAndUpdate(
            { _id: id, enabled: true },
            { name, email, lastName, phone, role, dob, username },
            { new: true }
        )
          
        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        errorHandler(error, req, res)
    }
};

export const getAllMyUsers = async (req, res) => {
    const { userId } = req.params;
  
    if (req.user.role !== "Admin") {
      return res.status(403).json({ message: "No autorizado, solo admin puede acceder." });
    }
  
    try {
      // Busca todos los usuarios que coincidan con el userId proporcionado
      const users = await User.find({ userId });
      
      // Si no se encuentra ningún usuario
      if (!users.length) {
        return res.status(404).json({ message: "No se encontraron usuarios" });
      }
  
      return res.status(200).json({ users });
    } catch (error) {
        errorHandler(error, req, res)
    }
  };


  export const updatePassword = async (req, res) => {
    
  }