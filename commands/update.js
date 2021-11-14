module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Black Friday Rerun Outfits★')
        .setURL('')
        .setTimestamp()
        .setDescription('Hogy megünnepeljük a black friday-t, Black Friday Rerun Outfits különleges listája visszatér November 18.-án. A Black Friday Rerun Outfits, 2021 Június 10.-e előtti skinek lesznek elérhetők. (Collabb skinek kivételével)')
        .setImage('https://images-ext-1.discordapp.net/external/S6jq9ozaEmC5g23lQYLAF4st8ypOZSCcQ6j1o4NUyWE/https/pbs.twimg.com/media/FEKT2WdaMAANTdm.png%3Alarge')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

