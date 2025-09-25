import { Server as SocketServer } from 'socket.io';

class SocketManager {
  constructor(server) {
    this.io = new SocketServer(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      }
    });

    this.io.on('connection', (socket) => {
      console.log('🟢 Cliente conectado:', socket.id);

      socket.on('mensaje_cliente', (data) => {
        console.log('📨 mensaje recibido:', data);
        this.io.emit('mensaje_servidor', { text: `Servidor recibió: ${data.text}` });
      });

      socket.on('disconnect', () => {
        console.log('🔴 Cliente desconectado:', socket.id);
      });
    });
  }

  // Este método permite emitir desde cualquier parte
  emitir(canal, payload) {
    this.io.emit(canal, payload);
  }
}

export default SocketManager;