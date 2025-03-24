import { getErrorMessages, getErrorType } from "../utils/mongosse.js";

export const errorHandler = (error, _req, res) => {
  const parseError = error; // Eliminamos la tipificación de error

  const statusCode = res.locals?.statusCode ?? 400; // Uso de valor por defecto

  // Send the error response to the client
  res.status(statusCode).json({
    message: getErrorType(parseError),
    errors: getErrorMessages(parseError)
  });

  // Fallback por si no se ha enviado la respuesta
  if (!res.headersSent) {
    res.status(statusCode).json({ message: 'Ocurrió un error' });
  }
};
