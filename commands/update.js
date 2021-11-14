module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Akashi Fire Sale★')
        .setURL('')
        .setTimestamp()
        .setDescription('November 18.ával kezdve, bármelyik Black Friday Rerun Skin vásárlásakor jutalmakat kapsz azáltal, hogy hányat veszel. A jutalmak tartalmaznak Promise Ring-et és limitált bútorzatot is, amit a Dromban is lehet venni.')
        .setImage('https://images-ext-1.discordapp.net/external/HS1DcyemvkSZ645bBBAENsYUzQojecCPBIOn17J6vp0/https/pbs.twimg.com/media/FEKNkaWVUAcVEPa.jpg%3Alarge?width=1389&height=676')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}

