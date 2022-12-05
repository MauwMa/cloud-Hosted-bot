module.exports = {
    name: 'teszt2',
    description: 'teszt2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

        message.channel.send("<@318119134208458752> elkészült pár build frissítéssel. A következők lettek frissítve:\nFDG, Gascogne, GrafZeppelin, Heinrich, Helena, Helenameta, Hood") 

    if (message.deletable) message.delete();

    }     
}


