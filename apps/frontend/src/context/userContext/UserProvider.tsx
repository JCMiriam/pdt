import { useState, ReactNode } from 'react';
import { User } from '@pdt/shared-types';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);

  const setUser = (newUser: User) => setUserState(newUser);
  const clearUser = () => setUserState(null);

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
