const hiscores = require('osrs-json-hiscores');
module.exports = {
    name: 'hs',
    description: 'hs',
    execute(message, args, Discord, client) {
        //code here
        if(!args.length)return message.reply("Please specify a username.");
            let username = args.join(' ');
        hiscores.getStats(username).then(
            res => {
                const Embed = new Discord.MessageEmbed()
                    .setColor("#FF00FF")
                    .setDescription(username + '\'s Runecraft Level: ' + res.main.skills.runecraft.level);

                message.channel.send(Embed);
            }


        ).catch(err =>{
            message.channel.send("```Could not find a user by that name. \n OR \n The highscores might be down.```");
            console.log(err);
        });

    }
}