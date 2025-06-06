import request from 'supertest';
import app from '../../app';

describe('POST /api/users', () => {
    it('should create a new user and return it', async () => {
        const res = await request(app)
        .post('/api/users')
        .send({ username: 'dubu', avatarIndex: 3 });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body).toMatchObject({
        username: 'dubu',
        avatarIndex: 3,
        });
    });

    it('should return 400 if data is missing', async () => {
        const res = await request(app).post('/api/users').send({});
        expect(res.statusCode).toBe(400);
    });
});
