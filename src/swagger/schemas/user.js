export const USER = {
    User: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          description: 'El identificador único del usuario.'
        },
        name: {
          type: 'string',
          description: 'El nombre del usuario.'
        },
        lastname: {
          type: 'string',
          description: 'El apellido del usuario.'
        },
        dob: {
          type: 'string',
          format: 'date',
          description: 'La fecha de nacimiento del usuario.'
        },
        phone: {
          type: 'string',
          description: 'El número de teléfono del usuario.'
        },
        email: {
          type: 'string',
          format: 'email',
          description: 'La dirección de correo electrónico del usuario.'
        },
        username: {
          type: 'string',
          description: 'El nombre de usuario.'
        },
        role: {
          type: 'string',
          enum: ['Admin', 'User'],
          description: 'El rol del usuario en el sistema.'
        },
        enabled: {
          type: 'boolean',
          description: 'Indica si el usuario está habilitado o no.'
        },
        createdAt: {
          type: 'string',
          format: 'date-time',
          description: 'Fecha y hora cuando el usuario fue creado.'
        },
        updatedAt: {
          type: 'string',
          format: 'date-time',
          description: 'Fecha y hora de la última actualización del usuario.'
        },
        fullName: {
          type: 'string',
          description: 'Nombre completo del usuario.'
        }
      }
    }
  }