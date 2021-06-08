const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
 
const prefix = '/';
 
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
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }   else if(command == 'build-nagato'){
        client.commands.get('nagato').execute(message, args, Discord);
    }   else if(command == 'build-intrepid'){
        client.commands.get('intrepid').execute(message, args, Discord);
    }   else if(command == 'build-friedrich'){
        client.commands.get('friedrich').execute(message, args, Discord);
    }   else if(command == 'parancsok'){
        client.commands.get('parancsok').execute(message, args, Discord);
    }   else if(command == 'nagato-unloli'){
        client.commands.get('unloli').execute(message, args, Discord);
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
    }   else if(command == 'felszer'){
        client.commands.get('felszer').execute(message, args, Discord);
    }

});















































client.login(process.env.token);