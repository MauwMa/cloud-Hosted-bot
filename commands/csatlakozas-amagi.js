module.exports = {
    name: 'csatlakozas-amagi',
    description: 'csatlakozas-amagi',
    permissions: ["SEND_MESSAGES"],
    execute (client, message, args){

        if(message.member.roles.cache.has('789941230171062293')){
            message.channel.send("Már van ilyen szereped nyaaa~")
        } else {
            message.channel.send('Sikeresen csatlakoztál az Amagi szerverhez nyaaa~');
            message.member.roles.add('789941230171062293');
            message.member.roles.remove('789941238421651476');
            message.member.roles.remove('789941240912805898');
            message.member.roles.remove('789941242913882143');
            message.member.roles.remove('789941245307781150');
        }


    }}
