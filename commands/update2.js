module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('⛨Egy korty a Sardegniani Eleganciából⛨')
        .setURL('')
        .setDescription('Óh, Parancsnokom? Nem számítottam rá, hogy itt találkozzunk! A szerencse ma rám mosolyog. Hehe~ Van egy perced rám szánni, szeretnél csatlakozni hozzám egy csésze teára?\n\nRN Aquila az új ruhájába öltözik. A közeljövőben a dokkodban fog várni, Parancsnok.')
        .setImage('https://images-ext-2.discordapp.net/external/InOe4Pia21SU2z28SHj3-SgExsH_b1hZdNz1Hri2ocA/https/pbs.twimg.com/media/E_zeeCNVkAAY4Am.jpg%3Alarge?width=1112&height=405')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}