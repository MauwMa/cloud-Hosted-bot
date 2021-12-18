module.exports = {
    name: 'parancsok',
    description: 'parancsok',
    permissions: ["KICK_MEMBERS"],
    execute (client, message, args, Discord){
        const parancsok = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setTitle('Parancsok')
        .setURL('')
        .setDescription('Fontos, hogy ékezetnélkül írjátok be nyaaa~')
        .setTimestamp()
        .addFields(
            {name: 'Útmutatók:', value: '/build-hajónév\n/opsiren\n/felszer'},
            {name: 'Szerepadás:', value: '/csatlakozas-amagi - Csatlakozol az Amagi szerver szerephez\n/csatlakozas-avrora - Csatlakozol az Avrora szerver szerephez\n/csatlakozas-lexington - Csatlakozol az Lexington szerver szerephez\n/csatlakozas-sandy - Csatlakozol az Sandy szerver szerephez\n/csatlakozas-washington - Csatlakozol az Washington szerver szerephez'}
        )
        message.channel.send(parancsok);

        if (message.deletable) message.delete();
    }    
}