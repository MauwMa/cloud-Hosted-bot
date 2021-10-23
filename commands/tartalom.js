module.exports = {
    name: 'tartalom',
    permissions: ["KICK_MEMBERS"],
    description: 'tartalom',
    execute (client, message, args, Discord){


    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('') }

    if (parseInt(args[0]) > 100) {
        return message.reply('')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`***${deleteAmount}***db szabályt megszegő tartalom törölve~`)


    }    
}