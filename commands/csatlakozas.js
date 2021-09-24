module.exports = {
    name: 'csatlakozas',
    permissions: ["KICK_MEMBERS"],
    description: 'csatlakozas',
    execute (client, message, args, Discord){
        const csatlakozas = new Discord.MessageEmbed()
        .setColor('GREEM')
        .setTitle('Melyik szerveren játszol?')
        .setURL('')
        .setDescription(':white_circle:=>Avrora | :brown_circle:=>Avrora | :purple_circle:=>Lexington \n\n:red_circle:=>Sandy | :blue_circle:=>Washington')
        message.channel.send(csatlakozas)
        .then ((msg) => {setTimeout(function(){
            msg.react(":white_circle:")
            msg.react(":brown_circle:")
            msg.react(":purple_circle:")
            msg.react(":red_circle:")
            msg.react(":blue_circle:")
            msg.react("")
            msg.react("")
            msg.react("")
        }, 1000)})
        
    }    

}