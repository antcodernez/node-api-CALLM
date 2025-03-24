import { MongoServerError } from 'mongodb';

/**
 * Función para obtener los mensajes de error basados en el tipo de error.
 * @param {Object} error El error que se va a procesar
 * @returns {string[]} Un arreglo con los mensajes de error
 */
export const getErrorMessages = (error) => {
  if (error instanceof MongoServerError && error.code === 11000) {
    const keys = Object.keys(error.keyPattern || {});
    return keys.map(key => `La propiedad '${key}' ya existe.`);
  }

  if (error instanceof MongoServerError && error.name === 'CastError') {
    return ['Valores no compatibles.'];
  }

  if (error instanceof MongoServerError && error.name === 'ValidationError') {
    const errors = error.errors || {};
    const keys = Object.keys(errors);
    const messages = [];

    for (const key of keys) {
      messages.push(errors[key].message);
    }

    return messages;
  }

  if (error instanceof Error) {
    return [error.message];
  }

  return ['Ocurrió un error inesperado.'];
};

/**
 * Función para obtener el tipo de error.
 * @param {Object} error El error que se va a procesar
 * @returns {string} Un mensaje de tipo de error
 */
export const getErrorType = (error) => {
  if (error instanceof MongoServerError && error.name === 'ValidationError') {
    return 'Los datos proporcionados no son válidos.';
  }

  if (error instanceof MongoServerError && error.code === 11000) {
    return 'Los datos ya existen.';
  }

  return 'Ocurrió un error.';
};
