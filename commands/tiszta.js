module.exports = {
    name: 'tiszt',
    description: 'tiszt',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Valós számot írj be!') }

    if (parseInt(args[0]) > 300) {
        return message.reply('You can only delete 300 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`Sikeresen Törölt ***${deleteAmount}*** Üzetetet nyaaa~`)
    }    
}