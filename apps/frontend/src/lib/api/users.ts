import { api } from './client';
import { User } from '@pdt/shared-types';

type CreateUserDto = {
    username: string;
    avatarIndex: number;
};

export async function createUser(data: CreateUserDto): Promise<User> {
    return api<User>('/users', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}
