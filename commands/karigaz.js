module.exports = {
    name: 'karigaz',
    description: 'karigaz',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send({ files: ['karbantartas.png'] }) 

    if (message.deletable) message.delete();

    }    
}


