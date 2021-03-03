module.exports = {
    name: 'hotzone',
    description: 'hotzone',
    execute(message, args, Discord, client) {

        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.reply("You cant do this cmd!");
        }

        let k = "44s";
        let channel = message.guild.channels.cache.get('810945530678607912');
        if (args.length > 0) {
            k = args.join(' ');
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle('NEW PK HOTZONE')
            .setDescription('<:skull2:811786722454405170> ' + k + ' <:skull2:811786722454405170>');
        message.channel.send(embed);

    }
}