module.exports = {
    name: 'test',
    description: 'test',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const test = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setAuthor("Azur Lane Hungary", "https://i.imgur.com/LxJJ70i.png")
        

        .setURL('https://images-ext-2.discordapp.net/external/rrXe4vSGl4gemz8bKGRLtrr4RlzaQdrbWGnFt1GUNwg/https/pbs.twimg.com/media/FdVR74BUAAAx1Ok.jpg')
        .setDescription('Parancsnokok, \n\nEzek a lányok a party ruhájukba öltöztek, hogy csatlakozzanak a Csodálatos Banketthoz. Ezek a limitált kinézetek véglegesen elérhetőek.')
        .setImage('https://images-ext-2.discordapp.net/external/kyW1p8axEmuv7B3tAbUdVNk94jBeS9MJWJkqecT9fgM/https/pbs.twimg.com/media/FdVR74gUUAAU75g.jpg')
        .setTimestamp()
        client.channels.cache.find(channel => channel.id === "853629612986990612").send(test);
        if (test){
            return message.channel.send(`Elküldtem az updatet nyaaa~ `);   
          }
    }
} 