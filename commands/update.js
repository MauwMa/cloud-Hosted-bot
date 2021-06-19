module.exports = {
    name: 'update',
    description: 'update',
    execute (message, args, Discord){
        const update = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Tervrajzok Izumohoz')
        .setURL('')
        .setDescription('Parancsnokok,\n\n A tervrajz kiegészítő terv Izumohoz elérhető.\nParancsnokok extra Izumo tervrajzokat kaphatnak minden kutatás után.\n A maximum Izumo tervrajz, ami kapható ebben az eventben 30 darab nyaaa~')
        .setImage('https://images-ext-1.discordapp.net/external/EUn7S8zvc3Y2NwSh_nlbv9oKLb1MkNKigGoFaDtYy1s/https/pbs.twimg.com/media/E4JyatSVkAIe_qN.png%3Alarge')
        message.channel.send(update);
    if (message.deletable) message.delete();
    }    
}