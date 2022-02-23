module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        .setTitle('☭A Hajsza!☭')
        .setURL('')
        .setTimestamp()
        .setDescription(`Ide figyeljetek seggfejek! Körbekerítettünk titeket! Kronshtadt vagyok a Northern Parliament Különleges Erők vezetője! Egy választásotok van: gyertek ki feltartott kézzel és adjátok meg magatokat!\n\nSN Kronshtadt L2D új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.`)        
        .setImage('https://images-ext-2.discordapp.net/external/nB6KjGu6yAzAO63vnwCQphIwIdkwdGmLS72ybdSPubc/https/pbs.twimg.com/media/FMR7LNfVQAAEXLj.jpg')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}