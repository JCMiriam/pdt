//import { useState } from 'react';
// import { useUser } from '@/lib/hooks/useUser';
// import { createUser } from '@/lib/api/users';

// import { createRoom } from '@/lib/api/rooms'; // lo añadiremos después

/*import AvatarPicker from './AvatarPicker'; // lo crearemos luego
import styles from './CreateUserForm.module.scss';

type Props = {
    mode: 'create' | 'join';
};

const CreateUserForm = ({ mode }: Props) => {
  const [username, setUsername] = useState('');
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [pointsToWin, setPointsToWin] = useState(5);

  const { setUser } = useUser();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!username) return;

        try {
        const user = await createUser({ username, avatarIndex });
        setUser(user);

        if (mode === 'create') {
            // TODO: crear la sala con puntos
            console.log(`Crear sala con ${pointsToWin} puntos`);
        } else {
            // TODO: unirse a la sala
            console.log(`Unirse a sala ya existente`);
        }
        } catch (err) {
        console.error('Error creando usuario:', err);
        }   
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
        <label>
            Nombre de usuario
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        </label>

        <AvatarPicker selected={avatarIndex} onSelect={setAvatarIndex} />

        {mode === 'create' && (
            <label>
            Puntos para ganar
            <input
                type="number"
                min={1}
                max={20}
                value={pointsToWin}
                onChange={(e) => setPointsToWin(Number(e.target.value))}
                required
            />
            </label>
        )}

        <button type="submit">
            {mode === 'create' ? 'Crear partida' : 'Unirse a la partida'}
        </button>
        </form>
    );
};

export default CreateUserForm;
*/