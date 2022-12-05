module.exports = {
    name: 'vege',
    description: 'vege',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("A stream véget ért nyaaa~")

    if (message.deletable) message.delete();

    }    
}