module.exports = {
    name: 'ham',
    description: 'ham',
    execute (client, message, args){

        const emoji = bot.emojis.cache.get("856993966296399872")

    message.channel.send(`${emoji}`)

    if (message.deletable) message.delete();

    }    
}


