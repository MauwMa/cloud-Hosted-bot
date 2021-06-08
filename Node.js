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
    }   else if(command == 'build-bismarck'){
        client.commands.get('bismarck').execute(message, args, Discord);
    }   else if(command == 'build-ibuki'){
        client.commands.get('ibuki').execute(message, args, Discord);
    }   else if(command == 'build-z23'){
        client.commands.get('z23').execute(message, args, Discord);
    }   else if(command == 'build-sandiego'){
        client.commands.get('sandiego').execute(message, args, Discord);
    }   else if(command == 'build-ayanami'){
        client.commands.get('ayanami').execute(message, args, Discord);
    }   else if(command == 'build-atago'){
        client.commands.get('atago').execute(message, args, Discord);
    }   else if(command == 'build-helena'){
        client.commands.get('helena').execute(message, args, Discord);
    }   else if(command == 'build-howe'){
        client.commands.get('howe').execute(message, args, Discord);
    }   else if(command == 'build-longisland'){
        client.commands.get('longisland').execute(message, args, Discord);
    }   else if(command == 'build-laffey'){
        client.commands.get('laffey').execute(message, args, Discord);
    }   else if(command == 'build-aquila'){
        client.commands.get('aquila').execute(message, args, Discord);
    }   else if(command == 'build-shinano'){
        client.commands.get('shinano').execute(message, args, Discord);
    }   else if(command == 'build-swiftsure'){
        client.commands.get('swiftsure').execute(message, args, Discord);
    }   else if(command == 'build-azuma'){
        client.commands.get('azuma').execute(message, args, Discord);
    }   else if(command == 'build-alabama'){
        client.commands.get('alabama').execute(message, args, Discord);
    }   else if(command == 'build-suzutsuki'){
        client.commands.get('suzutsuki').execute(message, args, Discord);
    }   else if(command == 'build-shangrila'){
        client.commands.get('shangrila').execute(message, args, Discord);
    }   else if(command == 'build-tirpitz'){
        client.commands.get('tirpitz').execute(message, args, Discord);
    }   else if(command == 'build-newjersey'){
        client.commands.get('newjersey').execute(message, args, Discord);
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