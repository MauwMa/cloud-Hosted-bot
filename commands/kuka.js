module.exports = {
    name: 'tiszt',
    description: 'tiszt',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
    
        let deleteAmount;
    

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Valós számot írj be nyaaa~') }

    if (parseInt(args[0]) > 100) {
        return message.reply('Maximum 100 üzenetet tudsz törölni nyaaa~')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`Sikeresen Törölt ***${deleteAmount}*** Üzenetet nyaaa~`)


    }    
}