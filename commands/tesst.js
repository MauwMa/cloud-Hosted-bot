module.exports = {
    name: 'tesst',
    description: 'tesst',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        const tesst = new Attachment('./bbmain.png');
        message.channel.send(tesst);


    }    
}