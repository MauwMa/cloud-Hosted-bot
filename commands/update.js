module.exports = {
    name: 'update',
    description: 'update',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('✠Ägir✠')
        .setURL('')
        .setDescription('Üdvözöllek. Ägir a nagy cirkáló vagyok. Az akaratod a parancsom. Hehehe... Akkor hát, derítsük ki mit tudsz elérni, a tehetségarzenálommal.\n\n KMS Ägir felkészül a bevetésre és hamarosan a dokkodat fogja díszíteni a közel jövőben, Parancsnok.')
        .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/s960x960/211358116_1498658303831957_4502901987929414526_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=Sk8ve_bEYA4AX-59rvL&_nc_ht=scontent-vie1-1.xx&tp=7&oh=43c9d9635903e14d3173072175af1b1e&oe=60E8EFBF')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(update);
        if (message.deletable) message.delete();
        if (update){
            return message.channel.send(`Elküldtem az updatet nyaaa~`);
          }
    }    
}