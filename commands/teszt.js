module.exports = {
    name: 'teszt',
    permissions: ["KICK_MEMBERS"],
    description: 'teszt',
    execute (client, message, args){
        const teszt = client.channels.cache.find(channel => channel.id === "886583291464003635");
        teszt.send("Parancsnokok, véget ért a évforduló ünneplése. A szoba le lett zárva, de az event megkezdéséig lehet még nézelődni benne nyaaa~\nhttps://media.discordapp.net/attachments/886040959803097139/886620690097254420/unknown.png");
        if (teszt){
            return message.channel.send(`Informáltam a többieket a karbantartás végéről nyaaa~`);
          }

    }    
}