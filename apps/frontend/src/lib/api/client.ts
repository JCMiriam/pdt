const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export async function api<T>(
    path: string,
    options: RequestInit = {}
): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`, {
        headers: {
        'Content-Type': 'application/json',
        ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'API request failed');
    }

    return response.json() as Promise<T>;
}
