module.exports = {
    name: 'update',
    description: 'update',
    execute (message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('★Kasumi (Retrofit)★')
        .setURL('')
        .setDescription('Jelenleg, Kasumi a kikötőben van fejlesztés miatt. Hamarosan vízre lesz bocsájtva nyaaa~')
        .setImage('https://images-ext-1.discordapp.net/external/MVLl1U2YYJt0GrhlKvfZL8g1s7v-1YBJzXJM7uHGILs/https/pbs.twimg.com/media/E4P3KiIX0AUEq-q.jpg%3Alarge?width=405&height=676')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}