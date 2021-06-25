module.exports = {
    name: 'ehes',
    description: 'ehes',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("Akashi pénzt akar nyaaa~!");

    if (message.deletable) message.delete();

    }    
}