module.exports = {
    name: 'update',
    description: 'update',
    execute (message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('random')
        .setTitle('❀Lily-White Longing❀')
        .setURL('')
        .setDescription('Biztos álmodok, hogy felvehessem ezt a fehér leplet... \nHaha, mégis ami fontosabb, az életünk együtt! \nParancsnok, kérlek várd a násznevelésem gyümölcsét~\n\nÚj oath kinézet elérhető lesz a karbantartás után\nmiután elvetted Azumát')
        .setImage('https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/191508814_1478459932518461_2916110463906339128_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=-aVp7Rt-dTkAX-LHUuc&_nc_ht=scontent-vie1-1.xx&oh=ba21c8328770b50d6814183708a94ef6&oe=60E6564A')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}