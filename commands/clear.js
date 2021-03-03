module.exports = {
    name: 'clear',
    description: 'Clears a message',
    async execute(message, args, Discord, client) {
        if (!args[0]) return message.reply("You must enter a number to purge.");
        if (isNaN(args[0])) return message.reply("You must enter a number");
        if (args[0] > 98) return message.reply("Max of 98 messages.");
        if (args[0] < 1) return message.reply("You must speicify at least 1 message");
        let mesdel = parseInt(args[0])+1;
    
        message.delete();
        await message.channel.messages.fetch({ limit: mesdel }).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}