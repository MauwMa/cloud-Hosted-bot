module.exports = {
    name: 'tiszt',
    description: 'tiszt',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
    }    
}