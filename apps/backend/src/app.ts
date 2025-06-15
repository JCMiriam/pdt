import express from 'express';
import userRoutes from './features/users/user.route';

const app = express();
app.use(express.json());
app.use(userRoutes);

app.use('/api', userRoutes);

export default app;
