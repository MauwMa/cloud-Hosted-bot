module.exports = {
    name: 'parancsok',
    description: 'parancsok',
    execute (client, message, args, Discord){
        const parancsoks = new Discord.MessageEmbed()
        .setColor('#bada55')
        .setTitle('Parancsok')
        .setURL('')
        .setDescription('')
        .addFields(
            {name: 'Útmutatók:', value: '/build-hajónév\n/opsiren\n/felszer'},
            {name: 'Szerepadás:', value: '/csatlakozás-amagi - Csatlakozol az Amagi szerver szerephez\n/csatlakozás-avrora - Csatlakozol az Avrora szerver szerephez\n/csatlakozás-lexington - Csatlakozol az Lexington szerver szerephez\n/csatlakozás-sandy - Csatlakozol az Sandy szerver szerephez\n/csatlakozás-washington - Csatlakozol az Washington szerver szerephez'}
        )
        message.channel.send(parancsoks);

    }    
}