module.exports = {
    name: 'kuka',
    description: "kuka",
    permissions: ["KICK_MEMBERS"],
    async execute(message, args, client, Discord){
       // if(!args[0]) return message.channel.send("írd be azt a számot, ahány üzenetet akarsz törölni!");
       // if(isNaN(args[0])) return message.channel.send("kérlek írj be egy egész számot!");

       // if(args[0] > 300) return message.channel.send("Nem tudsz 300-nál több üzenetet törölni!");
       // if(args[0] < 1) return message.channel.send("Legalább egy üzenetet törölnöd kell!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });

    }
}