module.exports = {
    name: 'parancsok',
    description: 'parancsok',
    execute (client, message, args, Discord){
        const parancsoks = new Discord.MessageEmbed()
        .setColor('#bada55')
        .setTitle('Parancsok')
        .setURL('')
        .setDescription('Fontos, hogy ékezetnélkül írjátok be nyaaa~')
        .addFields(
            {name: 'Útmutatók:', value: '/build-hajónév\n/opsiren\n/felszer'},
            {name: 'Szerepadás:', value: '/csatlakozas-amagi - Csatlakozol az Amagi szerver szerephez\n/csatlakozas-avrora - Csatlakozol az Avrora szerver szerephez\n/csatlakozas-lexington - Csatlakozol az Lexington szerver szerephez\n/csatlakozas-sandy - Csatlakozol az Sandy szerver szerephez\n/csatlakozas-washington - Csatlakozol az Washington szerver szerephez'}
        )
        message.channel.send(parancsoks);

        if (message.deletable) message.delete();
    }    
}