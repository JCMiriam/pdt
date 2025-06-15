import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProvider } from '../UserProvider';
import { useUser } from '../useUser';

const TestComponent = () => {
    const { user, setUser, clearUser } = useUser();

    return (
        <div>
        <p data-testid="user">{user ? user.username : 'no-user'}</p>
        <button onClick={() => setUser({ id: '1', username: 'Dubu', avatarIndex: 2 })}>
            Set User
        </button>
        <button onClick={clearUser}>Clear User</button>
        </div>
    );
};

describe('UserProvider', () => {
    it('should render with no user initially', () => {
        render(
        <UserProvider>
            <TestComponent />
        </UserProvider>
        );
        expect(screen.getByTestId('user').textContent).toBe('no-user');
    });

    it('should set and clear user correctly', async () => {
        render(
        <UserProvider>
            <TestComponent />
        </UserProvider>
        );

        const setUserBtn = screen.getByText('Set User');
        const clearUserBtn = screen.getByText('Clear User');

        await userEvent.click(setUserBtn);
        expect(screen.getByTestId('user').textContent).toBe('Dubu');

        await userEvent.click(clearUserBtn);
        expect(screen.getByTestId('user').textContent).toBe('no-user');
    });

    it('should throw error if useUser is used outside provider', () => {
        const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

        const Broken = () => {
        useUser();
        return null;
        };

        expect(() => render(<Broken />)).toThrow(
        'useUser must be used within a UserProvider'
        );

        spy.mockRestore();
    });
});
