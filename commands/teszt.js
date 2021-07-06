module.exports = {
    name: 'teszt',
    description: 'teszt',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const teszt = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Emlékeztető')
        .setURL('')
        .setDescription('A Manjuu High School bútorzat 7/8-ig elérhető. Ne felejtsétek megvenni, ha még nincs meg.')
        .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/207314068_1497852887245832_6482710462920299034_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=6LApO8hLdQ4AX_DoqP6&_nc_ht=scontent-vie1-1.xx&oh=2fdbadd0ef967303bdd4e4ef84294626&oe=60E7F26C')
        client.channels.cache.find(channel => channel.id === "789936292413571102").send(teszt);
        if (send(teszt)){
            return console.channel.send(`Az üzenet ki lett küldve`);
          }

    }    
}