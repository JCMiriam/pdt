import { User, users } from './user.model';
import crypto from 'crypto';

export const createUser = (username: string, avatarIndex: number): User => {
    const id = crypto.randomUUID();

    const newUser: User = {
        id,
        username,
        avatarIndex,
    };

    users.push(newUser);
    return newUser;
};
