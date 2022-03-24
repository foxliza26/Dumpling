const {nanoid} = require(`nanoid`)

const low = require(`lowdb`)
const FileSync = require(`lowdb/adapters/FileSync`)
const adapter = new FileSync (`db/massege.json`)
const db= low(adapter)

db.defaults({
    messages: [
        {
            messageId: '1',
            userId: '1',
            senderName: 'Dimpl',
            messageText: 'What?',
            createdAt: '2022-03-07',
            avatar: 'https://cdn.vox-cdn.com/thumbor/G_GS3MkV7B81ETD_5AvQgFSS3T8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10705023/BAO_RGB_s110_19c.pub16.172.jpg'
        },
        {

            messageId: '2',
            userId: '2',
            senderName: 'Ron',
            messageText: 'Eat!!!',
            createdAt: '2022-03-07',
            avatar: 'https://m.media-amazon.com/images/M/MV5BYWY1N2I5MGUtZTBmNS00MWZmLWEyNzAtZjliNzk0ZDVkYzI1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX200_CR0,0,200,200_AL_.jpg'
        }
    ]

}). write()

module.exports = (io,socket) =>{
    const getMessages=() =>{
        const masseges = b.get('messages').value()
        io.emit('messanges', messanges)
    }
        const addMessages=(message) =>{
            db.get('messages')
            .push({
                messageId:nanoid(8),
creaded:new Data(),
...message
            })
.write()
getMessages()
}
    socket.on('message:get',getMessage)
    socket.on('message:add',getMessage)

}