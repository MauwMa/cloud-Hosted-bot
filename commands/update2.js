module.exports = {
    name: 'update2',
    description: 'update2',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        .setDescription('Parancsnokok,\n\n A 3. évforduló Limitált Megemlékezés Doboz rózsa verziója és cseresznye verziója elérhető~ \nRagadd meg az utolsó alkalmat, hogy megszerezd őket még mielőtt elfogynak.\n\n Bolt Link: https://t.co/fdl58JV2d9')
        .setImage('https://images-ext-2.discordapp.net/external/7Dc1oa55yKxPRvysaPFBwrZ8XiIfT_Npgchgm4icIC8/%3Fformat%3Dpng%26name%3D386x202/https/pbs.twimg.com/card_img/1425274092702167041/1BLZJciq')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update2);
        if (update2){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}