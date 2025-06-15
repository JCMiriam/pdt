import { Router } from 'express';
import { createUserController } from './user.controller';

const router = Router();

/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - avatarIndex
 *             properties:
 *               username:
 *                 type: string
 *                 example: player1
 *               avatarIndex:
 *                 type: number
 *                 example: 3
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 username:
 *                   type: string
 *                 avatarIndex:
 *                   type: number
 */
router.post('/users', createUserController);

export default router;
