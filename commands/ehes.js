module.exports = {
    name: 'ehes',
    description: 'ehes',
    execute (message, args){

        message.channel.send("Akashi pénzt akar nyaaa~!");

    if (message.deletable) message.delete();

    }    
}