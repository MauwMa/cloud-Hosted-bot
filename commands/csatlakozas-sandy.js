module.exports = {
    name: 'csatlakozas-sandy',
    description: 'csatlakozas-sandy',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args){

        if(message.member.roles.cache.has('789941242913882143')){
            message.channel.send("Már van ilyen szereped nyaaa~")
        } else {
            message.channel.send('Sikeresen csatlakoztál a Sandy szerverhez nya~');
            message.member.roles.remove('789941230171062293');
            message.member.roles.remove('789941238421651476');
            message.member.roles.remove('789941240912805898');
            message.member.roles.add('789941242913882143');
            message.member.roles.remove('789941245307781150');
        }


    }}
