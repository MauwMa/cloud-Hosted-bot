module.exports = {
    name: 'karban',
    description: 'karban',
    execute (message, args, Discord){
        const karban = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setTitle('Karbantartás!!')
        .setURL('')
        .setDescription('Parancsnokok, 6/17 Csütörtökön Magyar Időszámítás szerint \nreggel 09:00-kor lesz karbantartás. Kérjük a beosztásaitokat tervezzétek e szerint nyaaa~.')
        .setImage('https://i.imgur.com/0BEHNji.png')
        message.channel.send(karban);
    if (message.deletable) message.delete();
    }    
}