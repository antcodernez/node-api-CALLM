import { Schema, model } from "mongoose";

const userRole = {
    Admin:"Admin",
    User: "User"
};


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre es requerido"],
        trim: true,
        maxlength: [50, 'El nombre no puede tener más de 50 caracteres']
    },
    lastName: {
        type: String,
        required: [true, "El Apellido es requerido"],
        trim: true,
        maxlength: [50, "El apellido no puede tener más de 50 caracteres"]
    },
    dob: {
        type: Date,
        required: [true, "La fecha de nacimiento es requerida"]
    },
    phone: {
        type: String,
        required: [true, "El número teléfonico es requerido"],
        trim: true,
        match: [/^\+[1-9]\d{1,14}$/, 'Por favor, introduce un número de teléfono válido']
    },
    email: {
        type: String,
        requiered: [true, "El correo electronico es requerido"],
        unique: true,
        trim: true,
        match:  [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, introduce una dirección de correo electrónico válida']
    },
    username: {
        type: String,
        required: [true, "El nombre de usuario es requerido"],
        minLenght: [5, "El nombre de usuario debe tener al menos 5 caracteres"]
    },
    role: {
        type: String,
        enum: {
            values: Object.values(userRole),
            message: "{VALUE} no es un rol válido"
        }
    },
    enabled: {
        type: String,
        required: true,
        default: true
    },
    imageUrl: {
        type: String,
        default: "http://imagen.com/img.png"
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

userSchema.virtual.apply("fullName").get(() => {
    return `${this.name} ${this.lastName}`
})
const User = model("User", userSchema);

export default User