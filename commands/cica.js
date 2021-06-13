module.exports = {
    name: 'cica',
    description: 'cica',
    execute (message, args){

        message.channel.send("@Cica van egy build kérés fekld nyaaa~!");

    if (message.deletable) message.delete();

    }    
}