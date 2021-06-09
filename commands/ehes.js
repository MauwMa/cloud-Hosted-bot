module.exports = {
    name: 'ehes',
    description: 'ehes',
    execute (message, args){

        message.channel.send("Akashi gemeket akar nyaaa~!");

    if (message.deletable) message.delete();

    }    
}