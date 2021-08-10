module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Elérhető Androidra egy nem kötelező frissítés és bug javítás, amitől az értesítések miatt összeomlött a játék. Emellett egy hotfix, amely kikapcsolja az értesítési rendszert azoknak, akiknek problémát okoz. Főhadiszállás elnézést kér és kompenzációként 1.500 <:pnz:790201580812894218> 1.500 <:olaj:790201521593122816> 5 <:kocka:790201634100740117> lett küldve mindenkinek.')
        .setImage('')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}