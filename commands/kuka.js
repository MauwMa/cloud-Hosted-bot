module.exports = {
    name: 'kuka',
    description: "kuka",
    permissions: ["KICK_MEMBERS"],
    async execute(message, args){
        if(!args[0]) return message.lineReply("írd be azt a számot, ahány üzenetet akarsz törölni!");
        if(isNaN(args[0])) return message.lineReply("kérlek írj be egy egész számot!");

        if(args[0] > 300) return message.lineReply("Nem tudsz 300-nál több üzenetet törölni!");
        if(args[0] < 1) return message.lineReply("Legalább egy üzenetet törölnöd kell!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });

    }
}