import { Router } from "express";
import { refreshToken, signIn } from "../../controllers/Auth.js";

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints for managing authentication
 */

const authRouter = new Router();

/**
 * @swagger
 * /api/v1/auth/signin:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     description: Logs in a user using their username and password, returning an access token and a refresh token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: "user123"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "SecurePassword123!"
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Access token for authentication
 *                   example: "eyJhbGciOiJIUzI1NiIsInR..."
 *                 refreshToken:
 *                   type: string
 *                   description: Refresh token to obtain a new access token
 *                   example: "eyJhbGciOiJIUzI1NiIsInR..."
 *                 user:
 *                   type: object
 *                   description: User information
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "65b8f7c3a1e..."
 *                     username:
 *                       type: string
 *                       example: "user123"
 *                     email:
 *                       type: string
 *                       example: "user@example.com"
 *       400:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Incorrect password"
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User not found"
 */
authRouter.post('/signin', signIn)

/**
 * @swagger
 * /api/v1/auth/refresh-token:
 *   post:
 *     summary: Refresh access token
 *     tags: [Authentication]
 *     description: Generates a new access token using a valid refresh token sent in the header.
 *     parameters:
 *       - name: refreshToken
 *         in: header
 *         required: true
 *         description: The refresh token to refresh the access token.
 *         schema:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR..."
 *     responses:
 *       200:
 *         description: Successfully generated new access token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: New access token.
 *                   example: "eyJhbGciOiJIUzI1NiIsInR..."
 *       401:
 *         description: Refresh token is missing in headers.
 *       403:
 *         description: Invalid or expired refresh token.
 *       500:
 *         description: Server error.
 */
authRouter.post('/refresh-token', refreshToken)

export {
    authRouter
}