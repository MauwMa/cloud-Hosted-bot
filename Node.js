const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('guildMemberAdd', guildMember =>{
    //let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'valami');
 
    //guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('781214332583149599').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});

const { MessageEmbed } = require("discord.js")

//        module.exports = (client) => {
  //          const welcomechannelId = '781214332583149599' //Channel You Want to Send The Welcome Message
    //        const targetChannelId = `781214332583149599` //Channel For Rules
//
  //          client.on('guildMemberAdd', (member) => {
    //            console.log(member) // If You Want The User Info in Console Who Joined Server Then You Can Add This Line. // Optional
      //          const channel = member.guild.channels.cache.get(welcomechannelId)
//
  //              const embed = new MessageEmbed()
    //            .setTitle(`Welcome To ${member.guild.name}`)
      //          .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        //        .setDescription(`Hello <@${member.user.id}>, Welcome to **${member.guild.name}**. Thanks For Joining Our Server.
        //Please Read ${member.guild.channels.cache.get(targetChannelId).toString()}. Have a Nice Time.
        //Chat In <#787083837833871404>`)
   //             // You Can Add More Fields If You Want
     //           .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
       //         .setColor('RANDOM')
         //   channel.send(embed)
                
       //     })
      //  }

client.login(process.env.token);