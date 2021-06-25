module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){

        message.channel.send("Parancsnokok, a Swirling Cherry Blossoms event visszatért! Sikerült már találkoznotok Noshiroval és Ryuuhouval?\nhttps://www.youtube.com/watch?v=dGadadIQo0g");

    if (message.deletable) message.delete();

    }    
}