this.io = require('socket.io')(this.server);

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);
    socket.on('disconnect', () => {
        // console.log('Cliente desconectado', socket.id);
    })

    // Escuchar el evento.
    socket.on('enviar-mensaje', async(payload, callback) => {
        const id = 123456;
        callback({id, fecha: new Date().getTime()});
        
        // El socket como tal envía el mensaje a todos.
        socket.broadcast.emit('enviar-mensaje', payload)
    });
}

module.exports = {
    socketController
}