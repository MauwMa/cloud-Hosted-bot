module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Értesítés')
        .setURL('')
        .setDescription('Parancsnok, Twitter elérte a 240 ezer követőt! Perseus megérkezett és ünneplésképp HQ 10 <:kocka:790201634100740117> és 15000 <:pnz:790201580812894218> küld!')
        .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/212693767_1500741930290261_7261754425460431905_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=GDCqNfSfdGUAX-LoJ0d&_nc_ht=scontent-vie1-1.xx&oh=604551b0db9806f471b48dc58c5a9ad5&oe=60EC2C1C')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (message.deletable) message.delete();
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}