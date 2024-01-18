module.exports = {
    name: 'reminder',
    permissions: ["KICK_MEMBERS"],
    description: 'reminder',
    execute (client, message, args){
        const reminder = client.channels.cache.find(channel => channel.id === "789936506193182740");
          reminder.send("Parancsnokok, a hétnek lassan vége.\nNe felejtsétek beszedni a heti ládát a boltból\nés a heti küldetésekért járó jutalmat nyaaa~");
        if (reminder){
            return message.channel.send(`Emlékesztettem a parancsnokokat nyaaa~`);
          }

    }    
}