import { Request, Response, NextFunction } from 'express';
import { createUser } from './user.service';

export const createUserController = (req: Request, res: Response, _next: NextFunction): void => {
  const { username, avatarIndex } = req.body;

  if (!username || avatarIndex === undefined) {
    res.status(400).json({ error: 'username and avatarIndex are required' });
  }

  const user = createUser(username, avatarIndex);
  res.status(201).json(user);
};
