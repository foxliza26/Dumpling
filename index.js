// создаем http сервер
const server = require('http'). createServer()

//подключаемся к серверу сокет

const io = require('socket.io')(server,{
    cors: {
        origin:'*'
    }
})

const log=console.log
const registeruserHandlers = require('./handlers/userHandlers')
const registermessageHandlers = require('./handlers/messageHandlers')

// получаем обработчика событий
const onConnection = (socket) => {
    // выводим сообщение о подключении пользователя
    log('User connected')

    registeruserHandlers(io,socket)
    registeruserHandlers(io,socket)

    socket.on('disconnect', () => {
        log ('User disconnected')
    })

}
// обрабатываем подключение
io.on('connection', onConnection)

// запускаем сервер
const PORT = process.env.PORT||5000
server.listen(PORT,() => {
    log(`Server ready connect. Port: ${PORT}`)
})