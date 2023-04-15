import io from 'socket.io-client';

export const socket = io('https://the-real-otakus-ws.onrender.com/', {
  autoConnect: true,
});
