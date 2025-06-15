import { createContext } from 'react';
import { User } from '@pdt/shared-types';

export type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);
