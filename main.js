const { executionAsyncResource } = require('async_hooks');
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
 
const { YTSearcher } = require('ytsearcher');

const searcher = new YTSearcher({
    key: "AIzaSyCbvPGvSWkUg6IFKhykJalZaVLPI6Lq39g",
    revealed: true
});
const queue = new Map();
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Akashi is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }   else if(command == 'opsiren'){
        client.commands.get('opsiren').execute(message, args, Discord);
    }   else if(command == 'csatlakozás-amagi'){
        client.commands.get('amagi').execute(message, args);
    }   else if(command == 'csatlakozás-avrora'){
        client.commands.get('avrora').execute(message, args);
    }   else if(command == 'csatlakozás-lexington'){
        client.commands.get('lexington').execute(message, args);
    }   else if(command == 'csatlakozás-sandy'){
        client.commands.get('sandy').execute(message, args);
    }   else if(command == 'csatlakozás-washington'){
        client.commands.get('washington').execute(message, args);
    }   else if(command == 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }

   
    const serverQueue = queue.get(message.guild.id);
    switch(command){
        case 'play':
            execute(message, serverQueue);
            break;
        case 'stop':
            stop(message, serverQueue);
            break;
        case 'skip':
            skip(message, serverQueue);
            break;
    }
 
    async function execute(message, serverQueue){
        let vc = message.member.voice.channel;
        if(!vc){
            return message.channel.send("Kérlek csatlakozz a szobához először");
        }else{
            let result = await searcher.search(args.join(" "), { type: "video" })
            const songInfo = await ytdl.getInfo(result.first.url)
 
            let song = {
                title: songInfo.videoDetails.title,
                url: songInfo.videoDetails.video_url
            };
 
            if(!serverQueue){
                const queueConstructor = {
                    txtChannel: message.channel,
                    vChannel: vc,
                    connection: null,
                    songs: [],
                    volume: 10,
                    playing: true
                };
                queue.set(message.guild.id, queueConstructor);
 
                queueConstructor.songs.push(song);
 
                try{
                    let connection = await vc.join();
                    queueConstructor.connection = connection;
                    play(message.guild, queueConstructor.songs[0]);
                }catch (err){
                    console.error(err);
                    queue.delete(message.guild.id);
                    return message.channel.send(`Nem tudtam csatlakozni a szobához ${err}`)
                }
            }else{
                serverQueue.songs.push(song);
                return message.channel.send(`Hozzá lett adva a sorhoz ${song.url}`);
            }
        }
    }
    function play(guild, song){
        const serverQueue = queue.get(guild.id);
        if(!song){
            serverQueue.vChannel.leave();
            queue.delete(guild.id);
            return;
        }
        const dispatcher = serverQueue.connection
            .play(ytdl(song.url))
            .on('finish', () =>{
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
            serverQueue.txtChannel.send(`Jelenleg ez játszódik:  ${serverQueue.songs[0].url}`)
    }
    function stop (message, serverQueue){
        if(!message.member.voice.channel)
            return message.channel.send("Kérlek csatlakozz a szobához először")
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
    function skip (message, serverQueue){
        if(!message.member.voice.channel)
            return message.channel.send("Kérlek csatlakozz a szobához először");
        if(!serverQueue)
            return message.channel.send("Nincs mit skippelni!");
        serverQueue.connection.dispatcher.end();
    }
});








































client.login('NzkyNjU4NDU2NTA2NjYyOTEz.X-g6tg.gDsEGdHQWAQoAQ6PfKNHqqHym-I');