module.exports = {
    name: 'update3',
    description: 'update3',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const update3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('')
        .setURL('')
        //.setDescription('★Azur Lane x THE IDOLM@STER Kollaborálás Animációja PV★\n\nÚj kollaborálás fő event, Azur Himnusz, Július 22.-én fog kezdődni, amely az IDOLM@ASTER karaktereit fogja bemutatni!\n\nHd verzió: https://youtu.be/MBe9uuFpCDE')
        .setDescription("https://youtu.be/MBe9uuFpCDE")
        .setImage('')
        message.channel.send(update3);
          }
    }    