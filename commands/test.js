module.exports = {
    name: 'teszt',
    description: 'teszt',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const image = new Attachment('./bbmain.png')
        message.channel.send(image);


    }    
}