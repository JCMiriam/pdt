import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server as SocketIOServer } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
    cors: {
        origin: '*',
    },
});

app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => {
    res.send('pong');
});

io.on('connection', (socket) => {
    console.log('🔌 A user connected:', socket.id);

    socket.on('join-room', (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room ${room}`);
        io.to(room).emit('user-joined', socket.id);
    });

    socket.on('disconnect', () => {
        console.log('❌ A user disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
