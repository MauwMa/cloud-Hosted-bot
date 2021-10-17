module.exports = {
    name: 'tesst',
    description: 'tesst',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args, Discord){
        message.channel.send("Message", {files: ["bbmain.png"]});


    }    
}