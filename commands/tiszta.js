module.exports = {
    name: 'kuka',
    description: 'kuka',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args){

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Valós számot írj be!') }

    if (parseInt(args[0]) > 300) {
        return message.reply('Maximum 300 üzenetet tudsz törölni')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`Sikeresen Törölt ***${deleteAmount}*** Üzetetet nyaaa~`)
    }    
}